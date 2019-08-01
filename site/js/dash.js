const url = require("url");
const path = require("path");
const db = require('quick.db')
const Discord = require("discord.js");
const ayarlar = require('../../ayarlar.json');
const express = require("express");
const app = express();
app.listen(3000)
const moment = require("moment");
require("moment-duration-format");

var yetkiler = ["495825025207894016"]

const passport = require("passport");
const session = require("express-session");
const LevelStore = require("level-session-store")(session);
const Strategy = require("passport-discord").Strategy;

const helmet = require("helmet");

const md = require("marked");

module.exports = (client) => {

const templateDir = path.resolve(`${process.cwd()}${path.sep}site`);
  
  app.use("/css", express.static(path.resolve(`${path.sep}css`)));

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  passport.use(new Strategy({
    clientID: "497761216169639936",
    clientSecret: "8Jx3z_MUeWDPreestkq23PgnFmzRovBW",
    callbackURL: "https://gamerbott.glitch.me/callback",
    scope: ["identify","guilds", "guilds.join"]
  },
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
  }));

  app.use(session({
    secret: "123",
    resave: false,
    saveUninitialized: false,
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(helmet());

  app.locals.domain = "gamerbott.glitch.me"
  
  app.engine("html", require("ejs").renderFile);
  app.set("view engine", "html");

  var bodyParser = require("body-parser");
  app.use(bodyParser.json());       
  app.use(bodyParser.urlencoded({   
    extended: true
  })); 

  function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
    if(!client.guilds.get('591943997564649492').members.get(req.user.id)) {
      client.guilds.get('591943997564649492').addMember(req.user.id, { "accessToken": req.user.accessToken})
    return next();
    } return next(); }
    req.session.backURL = req.url;
    res.redirect("/giris");
  }

  const renderTemplate = (res, req, template, data = {}) => {
    const baseData = {
      bot: client,
      path: req.path,
      user: req.isAuthenticated() ? req.user : null
    };
    res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
    
  };

  app.get("/giris", (req, res, next) => {
    if (req.session.backURL) {
      req.session.backURL = req.session.backURL;
    } else if (req.headers.referer) {
      const parsed = url.parse(req.headers.referer);
      if (parsed.hostname === app.locals.domain) {
        req.session.backURL = parsed.path;
      }
    } else {
      req.session.backURL = "/";
    }
    next();
  },
  passport.authenticate("discord"));

  app.get("/callback", passport.authenticate("discord", { failureRedirect: "/autherror" }), async ( req, res ) => {
  if(req.session.backURL) {
  const u = req.session.backURL
  req.session.backURL = null
  res.redirect(u)
  } else return res.redirect("/")
})

  app.get("/autherror", (req, res) => {
    renderTemplate(res, req, "autherror.ejs");
    
    //client.channels.get("498131796870037514").send("Web Panelinde bağlantı hatası oluştu! Kişi giriş yapamıyor tekrar denemeli! Büyük bir sorun değil.")
  });

  app.get("/cikis", function(req, res) {
    req.session.destroy(() => {
      req.logout();
      res.redirect("/");
    });
    
  });

  app.get("/", (req, res) => {
    renderTemplate(res, req, "anasayfa.ejs");
    
  });
  
  app.get('/komutlar', (req, res) => {
    renderTemplate(res, req, "komutliste.ejs")
  })

  
  app.get("/bilgi", (req, res) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const members = client.guilds.reduce((p, c) => p + c.memberCount, 0);
    const channels = client.channels.size;
    const guilds = client.guilds.size;
    renderTemplate(res, req, "bilgi.ejs", {
      stats: {
        servers: guilds,
        members: members,
        channels: channels,
        uptime: duration,
        memoryUsage: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2),
        dVersion: Discord.version,
        nVersion: process.version
      }
    });
  });

  app.get("/panel", checkAuth, (req, res) => {
    const perms = Discord.EvaluatedPermissions;
    renderTemplate(res, req, "dash.ejs", {perms});
  });
  
  app.get("/admin", checkAuth, (req, res) => {
    if (yetkiler.some(a => req.user.id !== a)) return res.redirect("/404");
    renderTemplate(res, req, "admin.ejs");
  });

  app.get("/panel/:guildID", checkAuth, (req, res) => {
    const guild = client.guilds.get(req.params.guildID);
    if(!guild) return res.redirect('/')
    else if(yetkiler.some(a => req.user.id !== a) && !guild.member(req.user.id).hasPermission("MANAGE_GUILD")) return res.redirect("/")
     renderTemplate(res, req, "yonet.ejs", {guild, db});
  });
  
  app.post("/panel/:guildID", checkAuth, (req, res) => {
    var prefix = req.body['prefix']
    var sayac = req.body['sayac']
    var sayacs = req.body['sayacs']
    var modlog = req.body['modlog']
    var otorol = req.body['otorol']
    const guild = client.guilds.get(req.params.guildID);
    if(!guild) return res.redirect('/')
    else if(yetkiler.some(a => req.user.id !== a) && !guild.member(req.user.id).hasPermission("MANAGE_GUILD")) return res.redirect("/")
console.log(sayac)
    if(prefix !== undefined) { db.set(`sunucular.${guild.id}.prefix`, prefix) }
  
    if(sayacs !== undefined) { db.set(`sunucular.${guild.id}.sayac.sayi`, sayacs)}
  
   if(sayac !== undefined) {
      guild.channels.get(guild.channels.find(r => r.name === sayac).id).createWebhook(client.user.username, client.user.avatarURL)
     .then(wb => {
       var bilgi = wb.id
       var bilgii= wb.token 
    db.set(`sunucular.${guild.id}.sayac.webhook`, `{"id": "${bilgi}", "token": "${bilgii}"}`) 
    })}
    
    if(modlog !== undefined) {
      guild.channels.find(r => r.name === modlog).createWebhook(client.user.username, client.user.avatarURL)
     .then(wb => {
       var bilgi = wb.id
       var bilgii= wb.token 
    db.set(`sunucular.${guild.id}.modlog`, `{"id": "${bilgi}", "token": "${bilgii}"}`) 
      })}
  
   
    if(otorol !== undefined) {
          var otoroll = guild.roles.find(r => r.name === otorol).id

          db.set(`sunucular.${guild.id}.otorol`, otoroll) 
    }
  
    renderTemplate(res, req, "anasayfa.ejs");
  });
  
  
  app.get('*', (req,res) => {
    if(res.status(404)) return res.send('404 Not Found')
  })
  
};