var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/spf-parse/mechanismerror.js
var require_mechanismerror = __commonJS({
  "node_modules/spf-parse/mechanismerror.js"(exports2, module2) {
    "use strict";
    function MechanismError(message, type) {
      this.name = "MechanismError";
      this.message = message;
      this.type = type || "warning";
      this.stack = new Error().stack;
    }
    MechanismError.prototype = Object.create(Error.prototype);
    MechanismError.prototype.constructor = MechanismError;
    module2.exports = MechanismError;
  }
});

// node_modules/tldjs/rules.json
var require_rules = __commonJS({
  "node_modules/tldjs/rules.json"(exports2, module2) {
    module2.exports = { ac: "com|edu|gov|net|mil|org", ad: "nom", ae: "co|net|org|sch|ac|gov|mil|blogspot|nom", aero: "accident-investigation|accident-prevention|aerobatic|aeroclub|aerodrome|agents|aircraft|airline|airport|air-surveillance|airtraffic|air-traffic-control|ambulance|amusement|association|author|ballooning|broker|caa|cargo|catering|certification|championship|charter|civilaviation|club|conference|consultant|consulting|control|council|crew|design|dgca|educator|emergency|engine|engineer|entertainment|equipment|exchange|express|federation|flight|freight|fuel|gliding|government|groundhandling|group|hanggliding|homebuilt|insurance|journal|journalist|leasing|logistics|magazine|maintenance|media|microlight|modelling|navigation|parachuting|paragliding|passenger-association|pilot|press|production|recreation|repbody|res|research|rotorcraft|safety|scientist|services|show|skydiving|software|student|trader|trading|trainer|union|workinggroup|works", af: "gov|com|org|net|edu", ag: "com|org|net|co|nom", ai: "off|com|net|org|nom", al: "com|edu|gov|mil|net|org|blogspot|nom", am: "blogspot", ao: "ed|gv|og|co|pb|it", aq: "", ar: "com|edu|gob|gov|int|mil|musica|net|org|tur|blogspot.com", arpa: "e164|in-addr|ip6|iris|uri|urn", as: "gov", asia: "cloudns", at: "ac|co|gv|or|futurehosting|futuremailing|*ex.ortsinfo|*kunden.ortsinfo|blogspot.co|biz|info|priv|12hp|2ix|4lima|lima-city", au: "com|net|org|edu|gov|asn|id|info|conf|oz|act|nsw|nt|qld|sa|tas|vic|wa|act.edu|nsw.edu|nt.edu|qld.edu|sa.edu|tas.edu|vic.edu|wa.edu|qld.gov|sa.gov|tas.gov|vic.gov|wa.gov|blogspot.com", aw: "com", ax: "", az: "com|net|int|gov|org|edu|info|pp|mil|name|pro|biz", ba: "com|edu|gov|mil|net|org|blogspot", bb: "biz|co|com|edu|gov|info|net|org|store|tv", bd: "*", be: "ac|blogspot|*transurl", bf: "gov", bg: "a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9|blogspot|barsy", bh: "com|edu|net|org|gov", bi: "co|com|edu|or|org", biz: "cloudns|dyndns|for-better|for-more|for-some|for-the|selfip|webhop|mmafan|myftp|no-ip|dscloud", bj: "asso|barreau|gouv|blogspot", bm: "com|edu|gov|net|org", bn: "*", bo: "com|edu|gov|gob|int|org|net|mil|tv", br: "adm|adv|agr|am|arq|art|ato|b|belem|bio|blog|bmd|cim|cng|cnt|com|coop|cri|def|ecn|eco|edu|emp|eng|esp|etc|eti|far|flog|floripa|fm|fnd|fot|fst|g12|ggf|gov|ac.gov|al.gov|am.gov|ap.gov|ba.gov|ce.gov|df.gov|es.gov|go.gov|ma.gov|mg.gov|ms.gov|mt.gov|pa.gov|pb.gov|pe.gov|pi.gov|pr.gov|rj.gov|rn.gov|ro.gov|rr.gov|rs.gov|sc.gov|se.gov|sp.gov|to.gov|imb|ind|inf|jampa|jor|jus|leg|lel|mat|med|mil|mp|mus|net|*nom|not|ntr|odo|org|poa|ppg|pro|psc|psi|qsl|radio|rec|recife|slg|srv|taxi|teo|tmp|trd|tur|tv|vet|vix|vlog|wiki|zlg|blogspot.com|ac.leg|al.leg|am.leg|ap.leg|ba.leg|ce.leg|df.leg|es.leg|go.leg|ma.leg|mg.leg|ms.leg|mt.leg|pa.leg|pb.leg|pe.leg|pi.leg|pr.leg|rj.leg|rn.leg|ro.leg|rr.leg|rs.leg|sc.leg|se.leg|sp.leg|to.leg", bs: "com|net|org|edu|gov|we", bt: "com|edu|gov|net|org", bv: "", bw: "co|org", by: "gov|mil|com|of|blogspot.com|nym", bz: "com|net|org|edu|gov|za|nym", ca: "ab|bc|mb|nb|nf|nl|ns|nt|nu|on|pe|qc|sk|yk|gc|*awdev|co|blogspot|no-ip", cat: "", cc: "cloudns|ftpaccess|game-server|myphotos|scrapping|twmail|fantasyleague", cd: "gov", cf: "blogspot", cg: "", ch: "square7|blogspot|gotdns|12hp|2ix|4lima|lima-city", ci: "org|or|com|co|edu|ed|ac|net|go|asso|xn--aroport-bya|int|presse|md|gouv", ck: "*|!www", cl: "gov|gob|co|mil|blogspot|nom", cm: "co|com|gov|net", cn: "ac|com|edu|gov|net|org|mil|xn--55qx5d|xn--io0a7i|xn--od0alg|ah|bj|cq|fj|gd|gs|gz|gx|ha|hb|he|hi|hl|hn|jl|js|jx|ln|nm|nx|qh|sc|sd|sh|sn|sx|tj|xj|xz|yn|zj|hk|mo|tw|*compute.amazonaws.com|elasticbeanstalk.cn-north-1.amazonaws.com|*elb.amazonaws.com|s3.cn-north-1.amazonaws.com", co: "arts|com|edu|firm|gov|info|int|mil|net|nom|org|rec|web|blogspot.com|nodum", com: "*compute.amazonaws|*compute-1.amazonaws|us-east-1.amazonaws|*elasticbeanstalk|*elb.amazonaws|s3.amazonaws|s3-ap-northeast-1.amazonaws|s3-ap-northeast-2.amazonaws|s3-ap-south-1.amazonaws|s3-ap-southeast-1.amazonaws|s3-ap-southeast-2.amazonaws|s3-ca-central-1.amazonaws|s3-eu-central-1.amazonaws|s3-eu-west-1.amazonaws|s3-eu-west-2.amazonaws|s3-external-1.amazonaws|s3-fips-us-gov-west-1.amazonaws|s3-sa-east-1.amazonaws|s3-us-gov-west-1.amazonaws|s3-us-east-2.amazonaws|s3-us-west-1.amazonaws|s3-us-west-2.amazonaws|s3.ap-northeast-2.amazonaws|s3.ap-south-1.amazonaws|s3.ca-central-1.amazonaws|s3.eu-central-1.amazonaws|s3.eu-west-2.amazonaws|s3.us-east-2.amazonaws|s3.dualstack.ap-northeast-1.amazonaws|s3.dualstack.ap-northeast-2.amazonaws|s3.dualstack.ap-south-1.amazonaws|s3.dualstack.ap-southeast-1.amazonaws|s3.dualstack.ap-southeast-2.amazonaws|s3.dualstack.ca-central-1.amazonaws|s3.dualstack.eu-central-1.amazonaws|s3.dualstack.eu-west-1.amazonaws|s3.dualstack.eu-west-2.amazonaws|s3.dualstack.sa-east-1.amazonaws|s3.dualstack.us-east-1.amazonaws|s3.dualstack.us-east-2.amazonaws|s3-website-us-east-1.amazonaws|s3-website-us-west-1.amazonaws|s3-website-us-west-2.amazonaws|s3-website-ap-northeast-1.amazonaws|s3-website-ap-southeast-1.amazonaws|s3-website-ap-southeast-2.amazonaws|s3-website-eu-west-1.amazonaws|s3-website-sa-east-1.amazonaws|s3-website.ap-northeast-2.amazonaws|s3-website.ap-south-1.amazonaws|s3-website.ca-central-1.amazonaws|s3-website.eu-central-1.amazonaws|s3-website.eu-west-2.amazonaws|s3-website.us-east-2.amazonaws|on-aptible|myasustor|betainabox|bplaced|ar|br|cn|de|eu|gb|hu|jpn|kr|mex|no|qc|ru|sa|se|uk|us|uy|za|africa|gr|co|xenapponazure|jdevcloud|wpdevcloud|cloudcontrolled|cloudcontrolapp|drayddns|dreamhosters|mydrobo|dyndns-at-home|dyndns-at-work|dyndns-blog|dyndns-free|dyndns-home|dyndns-ip|dyndns-mail|dyndns-office|dyndns-pics|dyndns-remote|dyndns-server|dyndns-web|dyndns-wiki|dyndns-work|blogdns|cechire|dnsalias|dnsdojo|doesntexist|dontexist|doomdns|dyn-o-saur|dynalias|est-a-la-maison|est-a-la-masion|est-le-patron|est-mon-blogueur|from-ak|from-al|from-ar|from-ca|from-ct|from-dc|from-de|from-fl|from-ga|from-hi|from-ia|from-id|from-il|from-in|from-ks|from-ky|from-ma|from-md|from-mi|from-mn|from-mo|from-ms|from-mt|from-nc|from-nd|from-ne|from-nh|from-nj|from-nm|from-nv|from-oh|from-ok|from-or|from-pa|from-pr|from-ri|from-sc|from-sd|from-tn|from-tx|from-ut|from-va|from-vt|from-wa|from-wi|from-wv|from-wy|getmyip|gotdns|hobby-site|homelinux|homeunix|iamallama|is-a-anarchist|is-a-blogger|is-a-bookkeeper|is-a-bulls-fan|is-a-caterer|is-a-chef|is-a-conservative|is-a-cpa|is-a-cubicle-slave|is-a-democrat|is-a-designer|is-a-doctor|is-a-financialadvisor|is-a-geek|is-a-green|is-a-guru|is-a-hard-worker|is-a-hunter|is-a-landscaper|is-a-lawyer|is-a-liberal|is-a-libertarian|is-a-llama|is-a-musician|is-a-nascarfan|is-a-nurse|is-a-painter|is-a-personaltrainer|is-a-photographer|is-a-player|is-a-republican|is-a-rockstar|is-a-socialist|is-a-student|is-a-teacher|is-a-techie|is-a-therapist|is-an-accountant|is-an-actor|is-an-actress|is-an-anarchist|is-an-artist|is-an-engineer|is-an-entertainer|is-certified|is-gone|is-into-anime|is-into-cars|is-into-cartoons|is-into-games|is-leet|is-not-certified|is-slick|is-uberleet|is-with-theband|isa-geek|isa-hockeynut|issmarterthanyou|likes-pie|likescandy|neat-url|saves-the-whales|selfip|sells-for-less|sells-for-u|servebbs|simple-url|space-to-rent|teaches-yoga|writesthisblog|ddnsfree|ddnsgeek|giize|gleeze|kozow|loseyourip|ooguy|theworkpc|mytuleap|eu-1.evennode|eu-2.evennode|eu-3.evennode|eu-4.evennode|us-1.evennode|us-2.evennode|us-3.evennode|us-4.evennode|apps.fbsbx|firebaseapp|flynnhub|freebox-os|freeboxos|githubusercontent|*0emm|appspot|blogspot|codespot|googleapis|googlecode|pagespeedmobilizer|publishproxy|withgoogle|withyoutube|herokuapp|herokussl|*cns.joyent|barsyonline|meteorapp|eu.meteorapp|bitballoon|netlify|4u|nfshost|blogsyte|ciscofreak|damnserver|ditchyourip|dnsiskinky|dynns|geekgalaxy|health-carereform|homesecuritymac|homesecuritypc|myactivedirectory|mysecuritycamera|net-freaks|onthewifi|point2this|quicksytes|securitytactics|serveexchange|servehumour|servep2p|servesarcasm|stufftoread|unusualperson|workisboring|3utilities|ddnsking|myvnc|servebeer|servecounterstrike|serveftp|servegame|servehalflife|servehttp|serveirc|servemp3|servepics|servequake|operaunite|outsystemscloud|ownprovider|pgfog|pagefrontapp|gotpantheon|xen.prgmr|qa2|dev-myqnapcloud|alpha-myqnapcloud|myqnapcloud|*quipelements|rackmaze|rhcloud|logoip|firewall-gateway|myshopblocks|1kapp|appchizi|applinzi|sinaapp|vipsinaapp|bounty-full|alpha.bounty-full|beta.bounty-full|temp-dns|dsmynas|familyds|bloxcms|townnews-staging|hk|remotewd|yolasite", coop: "", cr: "ac|co|ed|fi|go|or|sa", cu: "com|edu|org|net|gov|inf", cv: "blogspot", cw: "com|edu|net|org", cx: "gov|ath|info", cy: "ac|biz|com|ekloges|gov|ltd|name|net|org|parliament|press|pro|tm|blogspot.com", cz: "co|realm|e4|blogspot|cloud.metacentrum|custom.metacentrum", de: "bplaced|square7|com|dyn.cosidns|dynamisches-dns|dnsupdater|internet-dns|l-o-g-i-n|dnshome|fuettertdasnetz|isteingeek|istmein|lebtimnetz|leitungsen|traeumtgerade|ddnss|dyn.ddnss|dyndns.ddnss|dyndns1|dyn-ip24|home-webserver|dyn.home-webserver|myhome-server|goip|blogspot|keymachine|git-repos|lcube-server|svn-repos|barsy|logoip|firewall-gateway|my-gateway|my-router|spdns|taifun-dns|12hp|2ix|4lima|lima-city|dd-dns|dray-dns|draydns|dyn-vpn|dynvpn|mein-vigor|my-vigor|my-wan|syno-ds|synology-diskstation|synology-ds", dj: "", dk: "biz|co|firm|reg|store|blogspot", dm: "com|net|org|edu|gov", do: "art|com|edu|gob|gov|mil|net|org|sld|web", dz: "com|org|net|gov|edu|asso|pol|art", ec: "com|info|net|fin|k12|med|pro|org|edu|gov|gob|mil", edu: "", ee: "edu|gov|riik|lib|med|com|pri|aip|org|fie|blogspot.com", eg: "com|edu|eun|gov|mil|name|net|org|sci|blogspot.com", er: "*", es: "com|nom|org|gob|edu|blogspot.com", et: "com|gov|org|edu|biz|name|info|net", eu: "mycd|cloudns|barsy|wellbeingzone|spdns|*transurl|diskstation", fi: "aland|dy|blogspot|iki", fj: "*", fk: "*", fm: "", fo: "", fr: "com|asso|nom|prd|presse|tm|aeroport|assedic|avocat|avoues|cci|chambagri|chirurgiens-dentistes|experts-comptables|geometre-expert|gouv|greta|huissier-justice|medecin|notaires|pharmacien|port|veterinaire|fbx-os|fbxos|freebox-os|freeboxos|blogspot|on-web|chirurgiens-dentistes-en-france", ga: "", gb: "", gd: "nom", ge: "com|edu|gov|org|mil|net|pvt", gf: "", gg: "co|net|org|cya", gh: "com|edu|gov|org|mil", gi: "com|ltd|gov|mod|edu|org", gl: "co|com|edu|net|org|nom", gm: "", gn: "ac|com|edu|gov|org|net", gov: "", gp: "com|net|mobi|edu|org|asso", gq: "", gr: "com|edu|net|org|gov|blogspot|nym", gs: "", gt: "com|edu|gob|ind|mil|net|org|nom", gu: "*", gw: "", gy: "co|com|edu|gov|net|org", hk: "com|edu|gov|idv|net|org|xn--55qx5d|xn--wcvs22d|xn--lcvr32d|xn--mxtq1m|xn--gmqw5a|xn--ciqpn|xn--gmq050i|xn--zf0avx|xn--io0a7i|xn--mk0axi|xn--od0alg|xn--od0aq3b|xn--tn0ag|xn--uc0atv|xn--uc0ay4a|blogspot|ltd|inc", hm: "", hn: "com|edu|org|net|mil|gob|nom", hr: "iz|from|name|com|blogspot", ht: "com|shop|firm|info|adult|net|pro|org|med|art|coop|pol|asso|edu|rel|gouv|perso", hu: "co|info|org|priv|sport|tm|2000|agrar|bolt|casino|city|erotica|erotika|film|forum|games|hotel|ingatlan|jogasz|konyvelo|lakas|media|news|reklam|sex|shop|suli|szex|tozsde|utazas|video|blogspot", id: "ac|biz|co|desa|go|mil|my|net|or|sch|web|blogspot.co", ie: "gov|blogspot", il: "ac|co|gov|idf|k12|muni|net|org|blogspot.co", im: "ac|co|com|ltd.co|net|org|plc.co|tt|tv|ro|nom", in: "co|firm|net|org|gen|ind|nic|ac|edu|res|gov|mil|cloudns|blogspot|barsy", info: "cloudns|dynamic-dns|dyndns|barrel-of-knowledge|barrell-of-knowledge|for-our|groks-the|groks-this|here-for-more|knowsitall|selfip|webhop|nsupdate|dvrcam|ilovecollege|no-ip", int: "eu", io: "com|backplaneapp|boxfuse|browsersafetymark|dedyn|drud|definima|enonic|customer.enonic|github|gitlab|hasura-app|ngrok|stage.nodeart|nodum|nid|pantheonsite|protonet|vaporcloud|hzc|sandcats|shiftedit|apps.lair|*stolos|spacekit|cust.dev.thingdust|cust.disrec.thingdust|cust.prod.thingdust|cust.testing.thingdust|wedeploy", iq: "gov|edu|mil|com|org|net", ir: "ac|co|gov|id|net|org|sch|xn--mgba3a4f16a|xn--mgba3a4fra", is: "net|com|edu|gov|org|int|cupcake|blogspot", it: "gov|edu|abr|abruzzo|aosta-valley|aostavalley|bas|basilicata|cal|calabria|cam|campania|emilia-romagna|emiliaromagna|emr|friuli-v-giulia|friuli-ve-giulia|friuli-vegiulia|friuli-venezia-giulia|friuli-veneziagiulia|friuli-vgiulia|friuliv-giulia|friulive-giulia|friulivegiulia|friulivenezia-giulia|friuliveneziagiulia|friulivgiulia|fvg|laz|lazio|lig|liguria|lom|lombardia|lombardy|lucania|mar|marche|mol|molise|piedmont|piemonte|pmn|pug|puglia|sar|sardegna|sardinia|sic|sicilia|sicily|taa|tos|toscana|trentino-a-adige|trentino-aadige|trentino-alto-adige|trentino-altoadige|trentino-s-tirol|trentino-stirol|trentino-sud-tirol|trentino-sudtirol|trentino-sued-tirol|trentino-suedtirol|trentinoa-adige|trentinoaadige|trentinoalto-adige|trentinoaltoadige|trentinos-tirol|trentinostirol|trentinosud-tirol|trentinosudtirol|trentinosued-tirol|trentinosuedtirol|tuscany|umb|umbria|val-d-aosta|val-daosta|vald-aosta|valdaosta|valle-aosta|valle-d-aosta|valle-daosta|valleaosta|valled-aosta|valledaosta|vallee-aoste|valleeaoste|vao|vda|ven|veneto|ag|agrigento|al|alessandria|alto-adige|altoadige|an|ancona|andria-barletta-trani|andria-trani-barletta|andriabarlettatrani|andriatranibarletta|ao|aosta|aoste|ap|aq|aquila|ar|arezzo|ascoli-piceno|ascolipiceno|asti|at|av|avellino|ba|balsan|bari|barletta-trani-andria|barlettatraniandria|belluno|benevento|bergamo|bg|bi|biella|bl|bn|bo|bologna|bolzano|bozen|br|brescia|brindisi|bs|bt|bz|ca|cagliari|caltanissetta|campidano-medio|campidanomedio|campobasso|carbonia-iglesias|carboniaiglesias|carrara-massa|carraramassa|caserta|catania|catanzaro|cb|ce|cesena-forli|cesenaforli|ch|chieti|ci|cl|cn|co|como|cosenza|cr|cremona|crotone|cs|ct|cuneo|cz|dell-ogliastra|dellogliastra|en|enna|fc|fe|fermo|ferrara|fg|fi|firenze|florence|fm|foggia|forli-cesena|forlicesena|fr|frosinone|ge|genoa|genova|go|gorizia|gr|grosseto|iglesias-carbonia|iglesiascarbonia|im|imperia|is|isernia|kr|la-spezia|laquila|laspezia|latina|lc|le|lecce|lecco|li|livorno|lo|lodi|lt|lu|lucca|macerata|mantova|massa-carrara|massacarrara|matera|mb|mc|me|medio-campidano|mediocampidano|messina|mi|milan|milano|mn|mo|modena|monza-brianza|monza-e-della-brianza|monza|monzabrianza|monzaebrianza|monzaedellabrianza|ms|mt|na|naples|napoli|no|novara|nu|nuoro|og|ogliastra|olbia-tempio|olbiatempio|or|oristano|ot|pa|padova|padua|palermo|parma|pavia|pc|pd|pe|perugia|pesaro-urbino|pesarourbino|pescara|pg|pi|piacenza|pisa|pistoia|pn|po|pordenone|potenza|pr|prato|pt|pu|pv|pz|ra|ragusa|ravenna|rc|re|reggio-calabria|reggio-emilia|reggiocalabria|reggioemilia|rg|ri|rieti|rimini|rm|rn|ro|roma|rome|rovigo|sa|salerno|sassari|savona|si|siena|siracusa|so|sondrio|sp|sr|ss|suedtirol|sv|ta|taranto|te|tempio-olbia|tempioolbia|teramo|terni|tn|to|torino|tp|tr|trani-andria-barletta|trani-barletta-andria|traniandriabarletta|tranibarlettaandria|trapani|trentino|trento|treviso|trieste|ts|turin|tv|ud|udine|urbino-pesaro|urbinopesaro|va|varese|vb|vc|ve|venezia|venice|verbania|vercelli|verona|vi|vibo-valentia|vibovalentia|vicenza|viterbo|vr|vs|vt|vv|blogspot", je: "co|net|org", jm: "*", jo: "com|org|net|edu|sch|gov|mil|name", jobs: "", jp: "ac|ad|co|ed|go|gr|lg|ne|or|aichi|akita|aomori|chiba|ehime|fukui|fukuoka|fukushima|gifu|gunma|hiroshima|hokkaido|hyogo|ibaraki|ishikawa|iwate|kagawa|kagoshima|kanagawa|kochi|kumamoto|kyoto|mie|miyagi|miyazaki|nagano|nagasaki|nara|niigata|oita|okayama|okinawa|osaka|saga|saitama|shiga|shimane|shizuoka|tochigi|tokushima|tokyo|tottori|toyama|wakayama|yamagata|yamaguchi|yamanashi|xn--4pvxs|xn--vgu402c|xn--c3s14m|xn--f6qx53a|xn--8pvr4u|xn--uist22h|xn--djrs72d6uy|xn--mkru45i|xn--0trq7p7nn|xn--8ltr62k|xn--2m4a15e|xn--efvn9s|xn--32vp30h|xn--4it797k|xn--1lqs71d|xn--5rtp49c|xn--5js045d|xn--ehqz56n|xn--1lqs03n|xn--qqqt11m|xn--kbrq7o|xn--pssu33l|xn--ntsq17g|xn--uisz3g|xn--6btw5a|xn--1ctwo|xn--6orx2r|xn--rht61e|xn--rht27z|xn--djty4k|xn--nit225k|xn--rht3d|xn--klty5x|xn--kltx9a|xn--kltp7d|xn--uuwu58a|xn--zbx025d|xn--ntso0iqx3a|xn--elqq16h|xn--4it168d|xn--klt787d|xn--rny31h|xn--7t0a264c|xn--5rtq34k|xn--k7yn95e|xn--tor131o|xn--d5qv7z876c|*kawasaki|*kitakyushu|*kobe|*nagoya|*sapporo|*sendai|*yokohama|!city.kawasaki|!city.kitakyushu|!city.kobe|!city.nagoya|!city.sapporo|!city.sendai|!city.yokohama|aisai.aichi|ama.aichi|anjo.aichi|asuke.aichi|chiryu.aichi|chita.aichi|fuso.aichi|gamagori.aichi|handa.aichi|hazu.aichi|hekinan.aichi|higashiura.aichi|ichinomiya.aichi|inazawa.aichi|inuyama.aichi|isshiki.aichi|iwakura.aichi|kanie.aichi|kariya.aichi|kasugai.aichi|kira.aichi|kiyosu.aichi|komaki.aichi|konan.aichi|kota.aichi|mihama.aichi|miyoshi.aichi|nishio.aichi|nisshin.aichi|obu.aichi|oguchi.aichi|oharu.aichi|okazaki.aichi|owariasahi.aichi|seto.aichi|shikatsu.aichi|shinshiro.aichi|shitara.aichi|tahara.aichi|takahama.aichi|tobishima.aichi|toei.aichi|togo.aichi|tokai.aichi|tokoname.aichi|toyoake.aichi|toyohashi.aichi|toyokawa.aichi|toyone.aichi|toyota.aichi|tsushima.aichi|yatomi.aichi|akita.akita|daisen.akita|fujisato.akita|gojome.akita|hachirogata.akita|happou.akita|higashinaruse.akita|honjo.akita|honjyo.akita|ikawa.akita|kamikoani.akita|kamioka.akita|katagami.akita|kazuno.akita|kitaakita.akita|kosaka.akita|kyowa.akita|misato.akita|mitane.akita|moriyoshi.akita|nikaho.akita|noshiro.akita|odate.akita|oga.akita|ogata.akita|semboku.akita|yokote.akita|yurihonjo.akita|aomori.aomori|gonohe.aomori|hachinohe.aomori|hashikami.aomori|hiranai.aomori|hirosaki.aomori|itayanagi.aomori|kuroishi.aomori|misawa.aomori|mutsu.aomori|nakadomari.aomori|noheji.aomori|oirase.aomori|owani.aomori|rokunohe.aomori|sannohe.aomori|shichinohe.aomori|shingo.aomori|takko.aomori|towada.aomori|tsugaru.aomori|tsuruta.aomori|abiko.chiba|asahi.chiba|chonan.chiba|chosei.chiba|choshi.chiba|chuo.chiba|funabashi.chiba|futtsu.chiba|hanamigawa.chiba|ichihara.chiba|ichikawa.chiba|ichinomiya.chiba|inzai.chiba|isumi.chiba|kamagaya.chiba|kamogawa.chiba|kashiwa.chiba|katori.chiba|katsuura.chiba|kimitsu.chiba|kisarazu.chiba|kozaki.chiba|kujukuri.chiba|kyonan.chiba|matsudo.chiba|midori.chiba|mihama.chiba|minamiboso.chiba|mobara.chiba|mutsuzawa.chiba|nagara.chiba|nagareyama.chiba|narashino.chiba|narita.chiba|noda.chiba|oamishirasato.chiba|omigawa.chiba|onjuku.chiba|otaki.chiba|sakae.chiba|sakura.chiba|shimofusa.chiba|shirako.chiba|shiroi.chiba|shisui.chiba|sodegaura.chiba|sosa.chiba|tako.chiba|tateyama.chiba|togane.chiba|tohnosho.chiba|tomisato.chiba|urayasu.chiba|yachimata.chiba|yachiyo.chiba|yokaichiba.chiba|yokoshibahikari.chiba|yotsukaido.chiba|ainan.ehime|honai.ehime|ikata.ehime|imabari.ehime|iyo.ehime|kamijima.ehime|kihoku.ehime|kumakogen.ehime|masaki.ehime|matsuno.ehime|matsuyama.ehime|namikata.ehime|niihama.ehime|ozu.ehime|saijo.ehime|seiyo.ehime|shikokuchuo.ehime|tobe.ehime|toon.ehime|uchiko.ehime|uwajima.ehime|yawatahama.ehime|echizen.fukui|eiheiji.fukui|fukui.fukui|ikeda.fukui|katsuyama.fukui|mihama.fukui|minamiechizen.fukui|obama.fukui|ohi.fukui|ono.fukui|sabae.fukui|sakai.fukui|takahama.fukui|tsuruga.fukui|wakasa.fukui|ashiya.fukuoka|buzen.fukuoka|chikugo.fukuoka|chikuho.fukuoka|chikujo.fukuoka|chikushino.fukuoka|chikuzen.fukuoka|chuo.fukuoka|dazaifu.fukuoka|fukuchi.fukuoka|hakata.fukuoka|higashi.fukuoka|hirokawa.fukuoka|hisayama.fukuoka|iizuka.fukuoka|inatsuki.fukuoka|kaho.fukuoka|kasuga.fukuoka|kasuya.fukuoka|kawara.fukuoka|keisen.fukuoka|koga.fukuoka|kurate.fukuoka|kurogi.fukuoka|kurume.fukuoka|minami.fukuoka|miyako.fukuoka|miyama.fukuoka|miyawaka.fukuoka|mizumaki.fukuoka|munakata.fukuoka|nakagawa.fukuoka|nakama.fukuoka|nishi.fukuoka|nogata.fukuoka|ogori.fukuoka|okagaki.fukuoka|okawa.fukuoka|oki.fukuoka|omuta.fukuoka|onga.fukuoka|onojo.fukuoka|oto.fukuoka|saigawa.fukuoka|sasaguri.fukuoka|shingu.fukuoka|shinyoshitomi.fukuoka|shonai.fukuoka|soeda.fukuoka|sue.fukuoka|tachiarai.fukuoka|tagawa.fukuoka|takata.fukuoka|toho.fukuoka|toyotsu.fukuoka|tsuiki.fukuoka|ukiha.fukuoka|umi.fukuoka|usui.fukuoka|yamada.fukuoka|yame.fukuoka|yanagawa.fukuoka|yukuhashi.fukuoka|aizubange.fukushima|aizumisato.fukushima|aizuwakamatsu.fukushima|asakawa.fukushima|bandai.fukushima|date.fukushima|fukushima.fukushima|furudono.fukushima|futaba.fukushima|hanawa.fukushima|higashi.fukushima|hirata.fukushima|hirono.fukushima|iitate.fukushima|inawashiro.fukushima|ishikawa.fukushima|iwaki.fukushima|izumizaki.fukushima|kagamiishi.fukushima|kaneyama.fukushima|kawamata.fukushima|kitakata.fukushima|kitashiobara.fukushima|koori.fukushima|koriyama.fukushima|kunimi.fukushima|miharu.fukushima|mishima.fukushima|namie.fukushima|nango.fukushima|nishiaizu.fukushima|nishigo.fukushima|okuma.fukushima|omotego.fukushima|ono.fukushima|otama.fukushima|samegawa.fukushima|shimogo.fukushima|shirakawa.fukushima|showa.fukushima|soma.fukushima|sukagawa.fukushima|taishin.fukushima|tamakawa.fukushima|tanagura.fukushima|tenei.fukushima|yabuki.fukushima|yamato.fukushima|yamatsuri.fukushima|yanaizu.fukushima|yugawa.fukushima|anpachi.gifu|ena.gifu|gifu.gifu|ginan.gifu|godo.gifu|gujo.gifu|hashima.gifu|hichiso.gifu|hida.gifu|higashishirakawa.gifu|ibigawa.gifu|ikeda.gifu|kakamigahara.gifu|kani.gifu|kasahara.gifu|kasamatsu.gifu|kawaue.gifu|kitagata.gifu|mino.gifu|minokamo.gifu|mitake.gifu|mizunami.gifu|motosu.gifu|nakatsugawa.gifu|ogaki.gifu|sakahogi.gifu|seki.gifu|sekigahara.gifu|shirakawa.gifu|tajimi.gifu|takayama.gifu|tarui.gifu|toki.gifu|tomika.gifu|wanouchi.gifu|yamagata.gifu|yaotsu.gifu|yoro.gifu|annaka.gunma|chiyoda.gunma|fujioka.gunma|higashiagatsuma.gunma|isesaki.gunma|itakura.gunma|kanna.gunma|kanra.gunma|katashina.gunma|kawaba.gunma|kiryu.gunma|kusatsu.gunma|maebashi.gunma|meiwa.gunma|midori.gunma|minakami.gunma|naganohara.gunma|nakanojo.gunma|nanmoku.gunma|numata.gunma|oizumi.gunma|ora.gunma|ota.gunma|shibukawa.gunma|shimonita.gunma|shinto.gunma|showa.gunma|takasaki.gunma|takayama.gunma|tamamura.gunma|tatebayashi.gunma|tomioka.gunma|tsukiyono.gunma|tsumagoi.gunma|ueno.gunma|yoshioka.gunma|asaminami.hiroshima|daiwa.hiroshima|etajima.hiroshima|fuchu.hiroshima|fukuyama.hiroshima|hatsukaichi.hiroshima|higashihiroshima.hiroshima|hongo.hiroshima|jinsekikogen.hiroshima|kaita.hiroshima|kui.hiroshima|kumano.hiroshima|kure.hiroshima|mihara.hiroshima|miyoshi.hiroshima|naka.hiroshima|onomichi.hiroshima|osakikamijima.hiroshima|otake.hiroshima|saka.hiroshima|sera.hiroshima|seranishi.hiroshima|shinichi.hiroshima|shobara.hiroshima|takehara.hiroshima|abashiri.hokkaido|abira.hokkaido|aibetsu.hokkaido|akabira.hokkaido|akkeshi.hokkaido|asahikawa.hokkaido|ashibetsu.hokkaido|ashoro.hokkaido|assabu.hokkaido|atsuma.hokkaido|bibai.hokkaido|biei.hokkaido|bifuka.hokkaido|bihoro.hokkaido|biratori.hokkaido|chippubetsu.hokkaido|chitose.hokkaido|date.hokkaido|ebetsu.hokkaido|embetsu.hokkaido|eniwa.hokkaido|erimo.hokkaido|esan.hokkaido|esashi.hokkaido|fukagawa.hokkaido|fukushima.hokkaido|furano.hokkaido|furubira.hokkaido|haboro.hokkaido|hakodate.hokkaido|hamatonbetsu.hokkaido|hidaka.hokkaido|higashikagura.hokkaido|higashikawa.hokkaido|hiroo.hokkaido|hokuryu.hokkaido|hokuto.hokkaido|honbetsu.hokkaido|horokanai.hokkaido|horonobe.hokkaido|ikeda.hokkaido|imakane.hokkaido|ishikari.hokkaido|iwamizawa.hokkaido|iwanai.hokkaido|kamifurano.hokkaido|kamikawa.hokkaido|kamishihoro.hokkaido|kamisunagawa.hokkaido|kamoenai.hokkaido|kayabe.hokkaido|kembuchi.hokkaido|kikonai.hokkaido|kimobetsu.hokkaido|kitahiroshima.hokkaido|kitami.hokkaido|kiyosato.hokkaido|koshimizu.hokkaido|kunneppu.hokkaido|kuriyama.hokkaido|kuromatsunai.hokkaido|kushiro.hokkaido|kutchan.hokkaido|kyowa.hokkaido|mashike.hokkaido|matsumae.hokkaido|mikasa.hokkaido|minamifurano.hokkaido|mombetsu.hokkaido|moseushi.hokkaido|mukawa.hokkaido|muroran.hokkaido|naie.hokkaido|nakagawa.hokkaido|nakasatsunai.hokkaido|nakatombetsu.hokkaido|nanae.hokkaido|nanporo.hokkaido|nayoro.hokkaido|nemuro.hokkaido|niikappu.hokkaido|niki.hokkaido|nishiokoppe.hokkaido|noboribetsu.hokkaido|numata.hokkaido|obihiro.hokkaido|obira.hokkaido|oketo.hokkaido|okoppe.hokkaido|otaru.hokkaido|otobe.hokkaido|otofuke.hokkaido|otoineppu.hokkaido|oumu.hokkaido|ozora.hokkaido|pippu.hokkaido|rankoshi.hokkaido|rebun.hokkaido|rikubetsu.hokkaido|rishiri.hokkaido|rishirifuji.hokkaido|saroma.hokkaido|sarufutsu.hokkaido|shakotan.hokkaido|shari.hokkaido|shibecha.hokkaido|shibetsu.hokkaido|shikabe.hokkaido|shikaoi.hokkaido|shimamaki.hokkaido|shimizu.hokkaido|shimokawa.hokkaido|shinshinotsu.hokkaido|shintoku.hokkaido|shiranuka.hokkaido|shiraoi.hokkaido|shiriuchi.hokkaido|sobetsu.hokkaido|sunagawa.hokkaido|taiki.hokkaido|takasu.hokkaido|takikawa.hokkaido|takinoue.hokkaido|teshikaga.hokkaido|tobetsu.hokkaido|tohma.hokkaido|tomakomai.hokkaido|tomari.hokkaido|toya.hokkaido|toyako.hokkaido|toyotomi.hokkaido|toyoura.hokkaido|tsubetsu.hokkaido|tsukigata.hokkaido|urakawa.hokkaido|urausu.hokkaido|uryu.hokkaido|utashinai.hokkaido|wakkanai.hokkaido|wassamu.hokkaido|yakumo.hokkaido|yoichi.hokkaido|aioi.hyogo|akashi.hyogo|ako.hyogo|amagasaki.hyogo|aogaki.hyogo|asago.hyogo|ashiya.hyogo|awaji.hyogo|fukusaki.hyogo|goshiki.hyogo|harima.hyogo|himeji.hyogo|ichikawa.hyogo|inagawa.hyogo|itami.hyogo|kakogawa.hyogo|kamigori.hyogo|kamikawa.hyogo|kasai.hyogo|kasuga.hyogo|kawanishi.hyogo|miki.hyogo|minamiawaji.hyogo|nishinomiya.hyogo|nishiwaki.hyogo|ono.hyogo|sanda.hyogo|sannan.hyogo|sasayama.hyogo|sayo.hyogo|shingu.hyogo|shinonsen.hyogo|shiso.hyogo|sumoto.hyogo|taishi.hyogo|taka.hyogo|takarazuka.hyogo|takasago.hyogo|takino.hyogo|tamba.hyogo|tatsuno.hyogo|toyooka.hyogo|yabu.hyogo|yashiro.hyogo|yoka.hyogo|yokawa.hyogo|ami.ibaraki|asahi.ibaraki|bando.ibaraki|chikusei.ibaraki|daigo.ibaraki|fujishiro.ibaraki|hitachi.ibaraki|hitachinaka.ibaraki|hitachiomiya.ibaraki|hitachiota.ibaraki|ibaraki.ibaraki|ina.ibaraki|inashiki.ibaraki|itako.ibaraki|iwama.ibaraki|joso.ibaraki|kamisu.ibaraki|kasama.ibaraki|kashima.ibaraki|kasumigaura.ibaraki|koga.ibaraki|miho.ibaraki|mito.ibaraki|moriya.ibaraki|naka.ibaraki|namegata.ibaraki|oarai.ibaraki|ogawa.ibaraki|omitama.ibaraki|ryugasaki.ibaraki|sakai.ibaraki|sakuragawa.ibaraki|shimodate.ibaraki|shimotsuma.ibaraki|shirosato.ibaraki|sowa.ibaraki|suifu.ibaraki|takahagi.ibaraki|tamatsukuri.ibaraki|tokai.ibaraki|tomobe.ibaraki|tone.ibaraki|toride.ibaraki|tsuchiura.ibaraki|tsukuba.ibaraki|uchihara.ibaraki|ushiku.ibaraki|yachiyo.ibaraki|yamagata.ibaraki|yawara.ibaraki|yuki.ibaraki|anamizu.ishikawa|hakui.ishikawa|hakusan.ishikawa|kaga.ishikawa|kahoku.ishikawa|kanazawa.ishikawa|kawakita.ishikawa|komatsu.ishikawa|nakanoto.ishikawa|nanao.ishikawa|nomi.ishikawa|nonoichi.ishikawa|noto.ishikawa|shika.ishikawa|suzu.ishikawa|tsubata.ishikawa|tsurugi.ishikawa|uchinada.ishikawa|wajima.ishikawa|fudai.iwate|fujisawa.iwate|hanamaki.iwate|hiraizumi.iwate|hirono.iwate|ichinohe.iwate|ichinoseki.iwate|iwaizumi.iwate|iwate.iwate|joboji.iwate|kamaishi.iwate|kanegasaki.iwate|karumai.iwate|kawai.iwate|kitakami.iwate|kuji.iwate|kunohe.iwate|kuzumaki.iwate|miyako.iwate|mizusawa.iwate|morioka.iwate|ninohe.iwate|noda.iwate|ofunato.iwate|oshu.iwate|otsuchi.iwate|rikuzentakata.iwate|shiwa.iwate|shizukuishi.iwate|sumita.iwate|tanohata.iwate|tono.iwate|yahaba.iwate|yamada.iwate|ayagawa.kagawa|higashikagawa.kagawa|kanonji.kagawa|kotohira.kagawa|manno.kagawa|marugame.kagawa|mitoyo.kagawa|naoshima.kagawa|sanuki.kagawa|tadotsu.kagawa|takamatsu.kagawa|tonosho.kagawa|uchinomi.kagawa|utazu.kagawa|zentsuji.kagawa|akune.kagoshima|amami.kagoshima|hioki.kagoshima|isa.kagoshima|isen.kagoshima|izumi.kagoshima|kagoshima.kagoshima|kanoya.kagoshima|kawanabe.kagoshima|kinko.kagoshima|kouyama.kagoshima|makurazaki.kagoshima|matsumoto.kagoshima|minamitane.kagoshima|nakatane.kagoshima|nishinoomote.kagoshima|satsumasendai.kagoshima|soo.kagoshima|tarumizu.kagoshima|yusui.kagoshima|aikawa.kanagawa|atsugi.kanagawa|ayase.kanagawa|chigasaki.kanagawa|ebina.kanagawa|fujisawa.kanagawa|hadano.kanagawa|hakone.kanagawa|hiratsuka.kanagawa|isehara.kanagawa|kaisei.kanagawa|kamakura.kanagawa|kiyokawa.kanagawa|matsuda.kanagawa|minamiashigara.kanagawa|miura.kanagawa|nakai.kanagawa|ninomiya.kanagawa|odawara.kanagawa|oi.kanagawa|oiso.kanagawa|sagamihara.kanagawa|samukawa.kanagawa|tsukui.kanagawa|yamakita.kanagawa|yamato.kanagawa|yokosuka.kanagawa|yugawara.kanagawa|zama.kanagawa|zushi.kanagawa|aki.kochi|geisei.kochi|hidaka.kochi|higashitsuno.kochi|ino.kochi|kagami.kochi|kami.kochi|kitagawa.kochi|kochi.kochi|mihara.kochi|motoyama.kochi|muroto.kochi|nahari.kochi|nakamura.kochi|nankoku.kochi|nishitosa.kochi|niyodogawa.kochi|ochi.kochi|okawa.kochi|otoyo.kochi|otsuki.kochi|sakawa.kochi|sukumo.kochi|susaki.kochi|tosa.kochi|tosashimizu.kochi|toyo.kochi|tsuno.kochi|umaji.kochi|yasuda.kochi|yusuhara.kochi|amakusa.kumamoto|arao.kumamoto|aso.kumamoto|choyo.kumamoto|gyokuto.kumamoto|kamiamakusa.kumamoto|kikuchi.kumamoto|kumamoto.kumamoto|mashiki.kumamoto|mifune.kumamoto|minamata.kumamoto|minamioguni.kumamoto|nagasu.kumamoto|nishihara.kumamoto|oguni.kumamoto|ozu.kumamoto|sumoto.kumamoto|takamori.kumamoto|uki.kumamoto|uto.kumamoto|yamaga.kumamoto|yamato.kumamoto|yatsushiro.kumamoto|ayabe.kyoto|fukuchiyama.kyoto|higashiyama.kyoto|ide.kyoto|ine.kyoto|joyo.kyoto|kameoka.kyoto|kamo.kyoto|kita.kyoto|kizu.kyoto|kumiyama.kyoto|kyotamba.kyoto|kyotanabe.kyoto|kyotango.kyoto|maizuru.kyoto|minami.kyoto|minamiyamashiro.kyoto|miyazu.kyoto|muko.kyoto|nagaokakyo.kyoto|nakagyo.kyoto|nantan.kyoto|oyamazaki.kyoto|sakyo.kyoto|seika.kyoto|tanabe.kyoto|uji.kyoto|ujitawara.kyoto|wazuka.kyoto|yamashina.kyoto|yawata.kyoto|asahi.mie|inabe.mie|ise.mie|kameyama.mie|kawagoe.mie|kiho.mie|kisosaki.mie|kiwa.mie|komono.mie|kumano.mie|kuwana.mie|matsusaka.mie|meiwa.mie|mihama.mie|minamiise.mie|misugi.mie|miyama.mie|nabari.mie|shima.mie|suzuka.mie|tado.mie|taiki.mie|taki.mie|tamaki.mie|toba.mie|tsu.mie|udono.mie|ureshino.mie|watarai.mie|yokkaichi.mie|furukawa.miyagi|higashimatsushima.miyagi|ishinomaki.miyagi|iwanuma.miyagi|kakuda.miyagi|kami.miyagi|kawasaki.miyagi|marumori.miyagi|matsushima.miyagi|minamisanriku.miyagi|misato.miyagi|murata.miyagi|natori.miyagi|ogawara.miyagi|ohira.miyagi|onagawa.miyagi|osaki.miyagi|rifu.miyagi|semine.miyagi|shibata.miyagi|shichikashuku.miyagi|shikama.miyagi|shiogama.miyagi|shiroishi.miyagi|tagajo.miyagi|taiwa.miyagi|tome.miyagi|tomiya.miyagi|wakuya.miyagi|watari.miyagi|yamamoto.miyagi|zao.miyagi|aya.miyazaki|ebino.miyazaki|gokase.miyazaki|hyuga.miyazaki|kadogawa.miyazaki|kawaminami.miyazaki|kijo.miyazaki|kitagawa.miyazaki|kitakata.miyazaki|kitaura.miyazaki|kobayashi.miyazaki|kunitomi.miyazaki|kushima.miyazaki|mimata.miyazaki|miyakonojo.miyazaki|miyazaki.miyazaki|morotsuka.miyazaki|nichinan.miyazaki|nishimera.miyazaki|nobeoka.miyazaki|saito.miyazaki|shiiba.miyazaki|shintomi.miyazaki|takaharu.miyazaki|takanabe.miyazaki|takazaki.miyazaki|tsuno.miyazaki|achi.nagano|agematsu.nagano|anan.nagano|aoki.nagano|asahi.nagano|azumino.nagano|chikuhoku.nagano|chikuma.nagano|chino.nagano|fujimi.nagano|hakuba.nagano|hara.nagano|hiraya.nagano|iida.nagano|iijima.nagano|iiyama.nagano|iizuna.nagano|ikeda.nagano|ikusaka.nagano|ina.nagano|karuizawa.nagano|kawakami.nagano|kiso.nagano|kisofukushima.nagano|kitaaiki.nagano|komagane.nagano|komoro.nagano|matsukawa.nagano|matsumoto.nagano|miasa.nagano|minamiaiki.nagano|minamimaki.nagano|minamiminowa.nagano|minowa.nagano|miyada.nagano|miyota.nagano|mochizuki.nagano|nagano.nagano|nagawa.nagano|nagiso.nagano|nakagawa.nagano|nakano.nagano|nozawaonsen.nagano|obuse.nagano|ogawa.nagano|okaya.nagano|omachi.nagano|omi.nagano|ookuwa.nagano|ooshika.nagano|otaki.nagano|otari.nagano|sakae.nagano|sakaki.nagano|saku.nagano|sakuho.nagano|shimosuwa.nagano|shinanomachi.nagano|shiojiri.nagano|suwa.nagano|suzaka.nagano|takagi.nagano|takamori.nagano|takayama.nagano|tateshina.nagano|tatsuno.nagano|togakushi.nagano|togura.nagano|tomi.nagano|ueda.nagano|wada.nagano|yamagata.nagano|yamanouchi.nagano|yasaka.nagano|yasuoka.nagano|chijiwa.nagasaki|futsu.nagasaki|goto.nagasaki|hasami.nagasaki|hirado.nagasaki|iki.nagasaki|isahaya.nagasaki|kawatana.nagasaki|kuchinotsu.nagasaki|matsuura.nagasaki|nagasaki.nagasaki|obama.nagasaki|omura.nagasaki|oseto.nagasaki|saikai.nagasaki|sasebo.nagasaki|seihi.nagasaki|shimabara.nagasaki|shinkamigoto.nagasaki|togitsu.nagasaki|tsushima.nagasaki|unzen.nagasaki|ando.nara|gose.nara|heguri.nara|higashiyoshino.nara|ikaruga.nara|ikoma.nara|kamikitayama.nara|kanmaki.nara|kashiba.nara|kashihara.nara|katsuragi.nara|kawai.nara|kawakami.nara|kawanishi.nara|koryo.nara|kurotaki.nara|mitsue.nara|miyake.nara|nara.nara|nosegawa.nara|oji.nara|ouda.nara|oyodo.nara|sakurai.nara|sango.nara|shimoichi.nara|shimokitayama.nara|shinjo.nara|soni.nara|takatori.nara|tawaramoto.nara|tenkawa.nara|tenri.nara|uda.nara|yamatokoriyama.nara|yamatotakada.nara|yamazoe.nara|yoshino.nara|aga.niigata|agano.niigata|gosen.niigata|itoigawa.niigata|izumozaki.niigata|joetsu.niigata|kamo.niigata|kariwa.niigata|kashiwazaki.niigata|minamiuonuma.niigata|mitsuke.niigata|muika.niigata|murakami.niigata|myoko.niigata|nagaoka.niigata|niigata.niigata|ojiya.niigata|omi.niigata|sado.niigata|sanjo.niigata|seiro.niigata|seirou.niigata|sekikawa.niigata|shibata.niigata|tagami.niigata|tainai.niigata|tochio.niigata|tokamachi.niigata|tsubame.niigata|tsunan.niigata|uonuma.niigata|yahiko.niigata|yoita.niigata|yuzawa.niigata|beppu.oita|bungoono.oita|bungotakada.oita|hasama.oita|hiji.oita|himeshima.oita|hita.oita|kamitsue.oita|kokonoe.oita|kuju.oita|kunisaki.oita|kusu.oita|oita.oita|saiki.oita|taketa.oita|tsukumi.oita|usa.oita|usuki.oita|yufu.oita|akaiwa.okayama|asakuchi.okayama|bizen.okayama|hayashima.okayama|ibara.okayama|kagamino.okayama|kasaoka.okayama|kibichuo.okayama|kumenan.okayama|kurashiki.okayama|maniwa.okayama|misaki.okayama|nagi.okayama|niimi.okayama|nishiawakura.okayama|okayama.okayama|satosho.okayama|setouchi.okayama|shinjo.okayama|shoo.okayama|soja.okayama|takahashi.okayama|tamano.okayama|tsuyama.okayama|wake.okayama|yakage.okayama|aguni.okinawa|ginowan.okinawa|ginoza.okinawa|gushikami.okinawa|haebaru.okinawa|higashi.okinawa|hirara.okinawa|iheya.okinawa|ishigaki.okinawa|ishikawa.okinawa|itoman.okinawa|izena.okinawa|kadena.okinawa|kin.okinawa|kitadaito.okinawa|kitanakagusuku.okinawa|kumejima.okinawa|kunigami.okinawa|minamidaito.okinawa|motobu.okinawa|nago.okinawa|naha.okinawa|nakagusuku.okinawa|nakijin.okinawa|nanjo.okinawa|nishihara.okinawa|ogimi.okinawa|okinawa.okinawa|onna.okinawa|shimoji.okinawa|taketomi.okinawa|tarama.okinawa|tokashiki.okinawa|tomigusuku.okinawa|tonaki.okinawa|urasoe.okinawa|uruma.okinawa|yaese.okinawa|yomitan.okinawa|yonabaru.okinawa|yonaguni.okinawa|zamami.okinawa|abeno.osaka|chihayaakasaka.osaka|chuo.osaka|daito.osaka|fujiidera.osaka|habikino.osaka|hannan.osaka|higashiosaka.osaka|higashisumiyoshi.osaka|higashiyodogawa.osaka|hirakata.osaka|ibaraki.osaka|ikeda.osaka|izumi.osaka|izumiotsu.osaka|izumisano.osaka|kadoma.osaka|kaizuka.osaka|kanan.osaka|kashiwara.osaka|katano.osaka|kawachinagano.osaka|kishiwada.osaka|kita.osaka|kumatori.osaka|matsubara.osaka|minato.osaka|minoh.osaka|misaki.osaka|moriguchi.osaka|neyagawa.osaka|nishi.osaka|nose.osaka|osakasayama.osaka|sakai.osaka|sayama.osaka|sennan.osaka|settsu.osaka|shijonawate.osaka|shimamoto.osaka|suita.osaka|tadaoka.osaka|taishi.osaka|tajiri.osaka|takaishi.osaka|takatsuki.osaka|tondabayashi.osaka|toyonaka.osaka|toyono.osaka|yao.osaka|ariake.saga|arita.saga|fukudomi.saga|genkai.saga|hamatama.saga|hizen.saga|imari.saga|kamimine.saga|kanzaki.saga|karatsu.saga|kashima.saga|kitagata.saga|kitahata.saga|kiyama.saga|kouhoku.saga|kyuragi.saga|nishiarita.saga|ogi.saga|omachi.saga|ouchi.saga|saga.saga|shiroishi.saga|taku.saga|tara.saga|tosu.saga|yoshinogari.saga|arakawa.saitama|asaka.saitama|chichibu.saitama|fujimi.saitama|fujimino.saitama|fukaya.saitama|hanno.saitama|hanyu.saitama|hasuda.saitama|hatogaya.saitama|hatoyama.saitama|hidaka.saitama|higashichichibu.saitama|higashimatsuyama.saitama|honjo.saitama|ina.saitama|iruma.saitama|iwatsuki.saitama|kamiizumi.saitama|kamikawa.saitama|kamisato.saitama|kasukabe.saitama|kawagoe.saitama|kawaguchi.saitama|kawajima.saitama|kazo.saitama|kitamoto.saitama|koshigaya.saitama|kounosu.saitama|kuki.saitama|kumagaya.saitama|matsubushi.saitama|minano.saitama|misato.saitama|miyashiro.saitama|miyoshi.saitama|moroyama.saitama|nagatoro.saitama|namegawa.saitama|niiza.saitama|ogano.saitama|ogawa.saitama|ogose.saitama|okegawa.saitama|omiya.saitama|otaki.saitama|ranzan.saitama|ryokami.saitama|saitama.saitama|sakado.saitama|satte.saitama|sayama.saitama|shiki.saitama|shiraoka.saitama|soka.saitama|sugito.saitama|toda.saitama|tokigawa.saitama|tokorozawa.saitama|tsurugashima.saitama|urawa.saitama|warabi.saitama|yashio.saitama|yokoze.saitama|yono.saitama|yorii.saitama|yoshida.saitama|yoshikawa.saitama|yoshimi.saitama|aisho.shiga|gamo.shiga|higashiomi.shiga|hikone.shiga|koka.shiga|konan.shiga|kosei.shiga|koto.shiga|kusatsu.shiga|maibara.shiga|moriyama.shiga|nagahama.shiga|nishiazai.shiga|notogawa.shiga|omihachiman.shiga|otsu.shiga|ritto.shiga|ryuoh.shiga|takashima.shiga|takatsuki.shiga|torahime.shiga|toyosato.shiga|yasu.shiga|akagi.shimane|ama.shimane|gotsu.shimane|hamada.shimane|higashiizumo.shimane|hikawa.shimane|hikimi.shimane|izumo.shimane|kakinoki.shimane|masuda.shimane|matsue.shimane|misato.shimane|nishinoshima.shimane|ohda.shimane|okinoshima.shimane|okuizumo.shimane|shimane.shimane|tamayu.shimane|tsuwano.shimane|unnan.shimane|yakumo.shimane|yasugi.shimane|yatsuka.shimane|arai.shizuoka|atami.shizuoka|fuji.shizuoka|fujieda.shizuoka|fujikawa.shizuoka|fujinomiya.shizuoka|fukuroi.shizuoka|gotemba.shizuoka|haibara.shizuoka|hamamatsu.shizuoka|higashiizu.shizuoka|ito.shizuoka|iwata.shizuoka|izu.shizuoka|izunokuni.shizuoka|kakegawa.shizuoka|kannami.shizuoka|kawanehon.shizuoka|kawazu.shizuoka|kikugawa.shizuoka|kosai.shizuoka|makinohara.shizuoka|matsuzaki.shizuoka|minamiizu.shizuoka|mishima.shizuoka|morimachi.shizuoka|nishiizu.shizuoka|numazu.shizuoka|omaezaki.shizuoka|shimada.shizuoka|shimizu.shizuoka|shimoda.shizuoka|shizuoka.shizuoka|susono.shizuoka|yaizu.shizuoka|yoshida.shizuoka|ashikaga.tochigi|bato.tochigi|haga.tochigi|ichikai.tochigi|iwafune.tochigi|kaminokawa.tochigi|kanuma.tochigi|karasuyama.tochigi|kuroiso.tochigi|mashiko.tochigi|mibu.tochigi|moka.tochigi|motegi.tochigi|nasu.tochigi|nasushiobara.tochigi|nikko.tochigi|nishikata.tochigi|nogi.tochigi|ohira.tochigi|ohtawara.tochigi|oyama.tochigi|sakura.tochigi|sano.tochigi|shimotsuke.tochigi|shioya.tochigi|takanezawa.tochigi|tochigi.tochigi|tsuga.tochigi|ujiie.tochigi|utsunomiya.tochigi|yaita.tochigi|aizumi.tokushima|anan.tokushima|ichiba.tokushima|itano.tokushima|kainan.tokushima|komatsushima.tokushima|matsushige.tokushima|mima.tokushima|minami.tokushima|miyoshi.tokushima|mugi.tokushima|nakagawa.tokushima|naruto.tokushima|sanagochi.tokushima|shishikui.tokushima|tokushima.tokushima|wajiki.tokushima|adachi.tokyo|akiruno.tokyo|akishima.tokyo|aogashima.tokyo|arakawa.tokyo|bunkyo.tokyo|chiyoda.tokyo|chofu.tokyo|chuo.tokyo|edogawa.tokyo|fuchu.tokyo|fussa.tokyo|hachijo.tokyo|hachioji.tokyo|hamura.tokyo|higashikurume.tokyo|higashimurayama.tokyo|higashiyamato.tokyo|hino.tokyo|hinode.tokyo|hinohara.tokyo|inagi.tokyo|itabashi.tokyo|katsushika.tokyo|kita.tokyo|kiyose.tokyo|kodaira.tokyo|koganei.tokyo|kokubunji.tokyo|komae.tokyo|koto.tokyo|kouzushima.tokyo|kunitachi.tokyo|machida.tokyo|meguro.tokyo|minato.tokyo|mitaka.tokyo|mizuho.tokyo|musashimurayama.tokyo|musashino.tokyo|nakano.tokyo|nerima.tokyo|ogasawara.tokyo|okutama.tokyo|ome.tokyo|oshima.tokyo|ota.tokyo|setagaya.tokyo|shibuya.tokyo|shinagawa.tokyo|shinjuku.tokyo|suginami.tokyo|sumida.tokyo|tachikawa.tokyo|taito.tokyo|tama.tokyo|toshima.tokyo|chizu.tottori|hino.tottori|kawahara.tottori|koge.tottori|kotoura.tottori|misasa.tottori|nanbu.tottori|nichinan.tottori|sakaiminato.tottori|tottori.tottori|wakasa.tottori|yazu.tottori|yonago.tottori|asahi.toyama|fuchu.toyama|fukumitsu.toyama|funahashi.toyama|himi.toyama|imizu.toyama|inami.toyama|johana.toyama|kamiichi.toyama|kurobe.toyama|nakaniikawa.toyama|namerikawa.toyama|nanto.toyama|nyuzen.toyama|oyabe.toyama|taira.toyama|takaoka.toyama|tateyama.toyama|toga.toyama|tonami.toyama|toyama.toyama|unazuki.toyama|uozu.toyama|yamada.toyama|arida.wakayama|aridagawa.wakayama|gobo.wakayama|hashimoto.wakayama|hidaka.wakayama|hirogawa.wakayama|inami.wakayama|iwade.wakayama|kainan.wakayama|kamitonda.wakayama|katsuragi.wakayama|kimino.wakayama|kinokawa.wakayama|kitayama.wakayama|koya.wakayama|koza.wakayama|kozagawa.wakayama|kudoyama.wakayama|kushimoto.wakayama|mihama.wakayama|misato.wakayama|nachikatsuura.wakayama|shingu.wakayama|shirahama.wakayama|taiji.wakayama|tanabe.wakayama|wakayama.wakayama|yuasa.wakayama|yura.wakayama|asahi.yamagata|funagata.yamagata|higashine.yamagata|iide.yamagata|kahoku.yamagata|kaminoyama.yamagata|kaneyama.yamagata|kawanishi.yamagata|mamurogawa.yamagata|mikawa.yamagata|murayama.yamagata|nagai.yamagata|nakayama.yamagata|nanyo.yamagata|nishikawa.yamagata|obanazawa.yamagata|oe.yamagata|oguni.yamagata|ohkura.yamagata|oishida.yamagata|sagae.yamagata|sakata.yamagata|sakegawa.yamagata|shinjo.yamagata|shirataka.yamagata|shonai.yamagata|takahata.yamagata|tendo.yamagata|tozawa.yamagata|tsuruoka.yamagata|yamagata.yamagata|yamanobe.yamagata|yonezawa.yamagata|yuza.yamagata|abu.yamaguchi|hagi.yamaguchi|hikari.yamaguchi|hofu.yamaguchi|iwakuni.yamaguchi|kudamatsu.yamaguchi|mitou.yamaguchi|nagato.yamaguchi|oshima.yamaguchi|shimonoseki.yamaguchi|shunan.yamaguchi|tabuse.yamaguchi|tokuyama.yamaguchi|toyota.yamaguchi|ube.yamaguchi|yuu.yamaguchi|chuo.yamanashi|doshi.yamanashi|fuefuki.yamanashi|fujikawa.yamanashi|fujikawaguchiko.yamanashi|fujiyoshida.yamanashi|hayakawa.yamanashi|hokuto.yamanashi|ichikawamisato.yamanashi|kai.yamanashi|kofu.yamanashi|koshu.yamanashi|kosuge.yamanashi|minami-alps.yamanashi|minobu.yamanashi|nakamichi.yamanashi|nanbu.yamanashi|narusawa.yamanashi|nirasaki.yamanashi|nishikatsura.yamanashi|oshino.yamanashi|otsuki.yamanashi|showa.yamanashi|tabayama.yamanashi|tsuru.yamanashi|uenohara.yamanashi|yamanakako.yamanashi|yamanashi.yamanashi|blogspot", ke: "*|blogspot.co", kg: "org|net|com|edu|gov|mil", kh: "*", ki: "edu|biz|net|org|gov|info|com", km: "org|nom|gov|prd|tm|edu|mil|ass|com|coop|asso|presse|medecin|notaires|pharmaciens|veterinaire|gouv", kn: "net|org|edu|gov", kp: "com|edu|gov|org|rep|tra", kr: "ac|co|es|go|hs|kg|mil|ms|ne|or|pe|re|sc|busan|chungbuk|chungnam|daegu|daejeon|gangwon|gwangju|gyeongbuk|gyeonggi|gyeongnam|incheon|jeju|jeonbuk|jeonnam|seoul|ulsan|blogspot", kw: "*", ky: "edu|gov|com|org|net", kz: "org|edu|net|gov|mil|com|nym", la: "int|net|info|edu|gov|per|com|org|bnr|c|nym", lb: "com|edu|gov|net|org", lc: "com|net|co|org|edu|gov|oy", li: "blogspot|nom|nym", lk: "gov|sch|net|int|com|org|edu|ngo|soc|web|ltd|assn|grp|hotel|ac", lr: "com|edu|gov|org|net", ls: "co|org", lt: "gov|blogspot|nym", lu: "blogspot|nym", lv: "com|edu|gov|org|mil|id|net|asn|conf", ly: "com|net|gov|plc|edu|sch|med|org|id", ma: "co|net|gov|org|ac|press", mc: "tm|asso", md: "blogspot", me: "co|net|org|edu|ac|gov|its|priv|c66|daplie|localhost.daplie|filegear|brasilia|ddns|dnsfor|hopto|loginto|noip|webhop|nym|diskstation|dscloud|i234|myds|synology|wedeploy|yombo", mg: "org|nom|gov|prd|tm|edu|mil|com|co", mh: "", mil: "", mk: "com|org|net|edu|gov|inf|name|blogspot|nom", ml: "com|edu|gouv|gov|net|org|presse", mm: "*", mn: "gov|edu|org|nyc", mo: "com|net|org|edu|gov", mobi: "dscloud", mp: "", mq: "", mr: "gov|blogspot", ms: "com|edu|gov|net|org", mt: "com|edu|net|org|blogspot.com", mu: "com|net|org|gov|ac|co|or", museum: "academy|agriculture|air|airguard|alabama|alaska|amber|ambulance|american|americana|americanantiques|americanart|amsterdam|and|annefrank|anthro|anthropology|antiques|aquarium|arboretum|archaeological|archaeology|architecture|art|artanddesign|artcenter|artdeco|arteducation|artgallery|arts|artsandcrafts|asmatart|assassination|assisi|association|astronomy|atlanta|austin|australia|automotive|aviation|axis|badajoz|baghdad|bahn|bale|baltimore|barcelona|baseball|basel|baths|bauern|beauxarts|beeldengeluid|bellevue|bergbau|berkeley|berlin|bern|bible|bilbao|bill|birdart|birthplace|bonn|boston|botanical|botanicalgarden|botanicgarden|botany|brandywinevalley|brasil|bristol|british|britishcolumbia|broadcast|brunel|brussel|brussels|bruxelles|building|burghof|bus|bushey|cadaques|california|cambridge|can|canada|capebreton|carrier|cartoonart|casadelamoneda|castle|castres|celtic|center|chattanooga|cheltenham|chesapeakebay|chicago|children|childrens|childrensgarden|chiropractic|chocolate|christiansburg|cincinnati|cinema|circus|civilisation|civilization|civilwar|clinton|clock|coal|coastaldefence|cody|coldwar|collection|colonialwilliamsburg|coloradoplateau|columbia|columbus|communication|communications|community|computer|computerhistory|xn--comunicaes-v6a2o|contemporary|contemporaryart|convent|copenhagen|corporation|xn--correios-e-telecomunicaes-ghc29a|corvette|costume|countryestate|county|crafts|cranbrook|creation|cultural|culturalcenter|culture|cyber|cymru|dali|dallas|database|ddr|decorativearts|delaware|delmenhorst|denmark|depot|design|detroit|dinosaur|discovery|dolls|donostia|durham|eastafrica|eastcoast|education|educational|egyptian|eisenbahn|elburg|elvendrell|embroidery|encyclopedic|england|entomology|environment|environmentalconservation|epilepsy|essex|estate|ethnology|exeter|exhibition|family|farm|farmequipment|farmers|farmstead|field|figueres|filatelia|film|fineart|finearts|finland|flanders|florida|force|fortmissoula|fortworth|foundation|francaise|frankfurt|franziskaner|freemasonry|freiburg|fribourg|frog|fundacio|furniture|gallery|garden|gateway|geelvinck|gemological|geology|georgia|giessen|glas|glass|gorge|grandrapids|graz|guernsey|halloffame|hamburg|handson|harvestcelebration|hawaii|health|heimatunduhren|hellas|helsinki|hembygdsforbund|heritage|histoire|historical|historicalsociety|historichouses|historisch|historisches|history|historyofscience|horology|house|humanities|illustration|imageandsound|indian|indiana|indianapolis|indianmarket|intelligence|interactive|iraq|iron|isleofman|jamison|jefferson|jerusalem|jewelry|jewish|jewishart|jfk|journalism|judaica|judygarland|juedisches|juif|karate|karikatur|kids|koebenhavn|koeln|kunst|kunstsammlung|kunstunddesign|labor|labour|lajolla|lancashire|landes|lans|xn--lns-qla|larsson|lewismiller|lincoln|linz|living|livinghistory|localhistory|london|losangeles|louvre|loyalist|lucerne|luxembourg|luzern|mad|madrid|mallorca|manchester|mansion|mansions|manx|marburg|maritime|maritimo|maryland|marylhurst|media|medical|medizinhistorisches|meeres|memorial|mesaverde|michigan|midatlantic|military|mill|miners|mining|minnesota|missile|missoula|modern|moma|money|monmouth|monticello|montreal|moscow|motorcycle|muenchen|muenster|mulhouse|muncie|museet|museumcenter|museumvereniging|music|national|nationalfirearms|nationalheritage|nativeamerican|naturalhistory|naturalhistorymuseum|naturalsciences|nature|naturhistorisches|natuurwetenschappen|naumburg|naval|nebraska|neues|newhampshire|newjersey|newmexico|newport|newspaper|newyork|niepce|norfolk|north|nrw|nuernberg|nuremberg|nyc|nyny|oceanographic|oceanographique|omaha|online|ontario|openair|oregon|oregontrail|otago|oxford|pacific|paderborn|palace|paleo|palmsprings|panama|paris|pasadena|pharmacy|philadelphia|philadelphiaarea|philately|phoenix|photography|pilots|pittsburgh|planetarium|plantation|plants|plaza|portal|portland|portlligat|posts-and-telecommunications|preservation|presidio|press|project|public|pubol|quebec|railroad|railway|research|resistance|riodejaneiro|rochester|rockart|roma|russia|saintlouis|salem|salvadordali|salzburg|sandiego|sanfrancisco|santabarbara|santacruz|santafe|saskatchewan|satx|savannahga|schlesisches|schoenbrunn|schokoladen|school|schweiz|science|scienceandhistory|scienceandindustry|sciencecenter|sciencecenters|science-fiction|sciencehistory|sciences|sciencesnaturelles|scotland|seaport|settlement|settlers|shell|sherbrooke|sibenik|silk|ski|skole|society|sologne|soundandvision|southcarolina|southwest|space|spy|square|stadt|stalbans|starnberg|state|stateofdelaware|station|steam|steiermark|stjohn|stockholm|stpetersburg|stuttgart|suisse|surgeonshall|surrey|svizzera|sweden|sydney|tank|tcm|technology|telekommunikation|television|texas|textile|theater|time|timekeeping|topology|torino|touch|town|transport|tree|trolley|trust|trustee|uhren|ulm|undersea|university|usa|usantiques|usarts|uscountryestate|usculture|usdecorativearts|usgarden|ushistory|ushuaia|uslivinghistory|utah|uvic|valley|vantaa|versailles|viking|village|virginia|virtual|virtuel|vlaanderen|volkenkunde|wales|wallonie|war|washingtondc|watchandclock|watch-and-clock|western|westfalen|whaling|wildlife|williamsburg|windmill|workshop|york|yorkshire|yosemite|youth|zoological|zoology|xn--9dbhblg6di|xn--h1aegh", mv: "aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro", mw: "ac|biz|co|com|coop|edu|gov|int|museum|net|org", mx: "com|org|gob|edu|net|blogspot|nym", my: "com|net|org|gov|edu|mil|name|blogspot", mz: "ac|adv|co|edu|gov|mil|net|org", na: "info|pro|name|school|or|dr|us|mx|ca|in|cc|tv|ws|mobi|co|com|org", name: "forgot.her|forgot.his", nc: "asso|nom", ne: "", net: "*alwaysdata|cloudfront|t3l3p0rt|myfritz|boomla|bplaced|square7|gb|hu|jp|se|uk|in|cloudaccess|cdn77-ssl|r.cdn77|feste-ip|knx-server|static-access|*cryptonomic|at-band-camp|blogdns|broke-it|buyshouses|dnsalias|dnsdojo|does-it|dontexist|dynalias|dynathome|endofinternet|from-az|from-co|from-la|from-ny|gets-it|ham-radio-op|homeftp|homeip|homelinux|homeunix|in-the-band|is-a-chef|is-a-geek|isa-geek|kicks-ass|office-on-the|podzone|scrapper-site|selfip|sells-it|servebbs|serveftp|thruhere|webhop|definima|casacam|dynu|dynv6|twmail|ru|fastlylb|map.fastlylb|freetls.fastly|map.fastly|a.prod.fastly|global.prod.fastly|a.ssl.fastly|b.ssl.fastly|global.ssl.fastly|flynnhosting|cloudfunctions|moonscale|ipifony|barsy|azurewebsites|azure-mobile|cloudapp|eating-organic|mydissent|myeffect|mymediapc|mypsx|mysecuritycamera|nhlfan|no-ip|pgafan|privatizehealthinsurance|bounceme|ddns|redirectme|serveblog|serveminecraft|sytes|rackmaze|firewall-gateway|dsmynas|familyds|za", nf: "com|net|per|rec|web|arts|firm|info|other|store", ng: "com|edu|gov|i|mil|mobi|name|net|org|sch|blogspot.com", ni: "ac|biz|co|com|edu|gob|in|info|int|mil|net|nom|org|web", nl: "bv|virtueeldomein|co|blogspot|*transurl|cistron|demon", no: "fhs|vgs|fylkesbibl|folkebibl|museum|idrett|priv|mil|stat|dep|kommune|herad|aa|ah|bu|fm|hl|hm|jan-mayen|mr|nl|nt|of|ol|oslo|rl|sf|st|svalbard|tm|tr|va|vf|gs.aa|gs.ah|gs.bu|gs.fm|gs.hl|gs.hm|gs.jan-mayen|gs.mr|gs.nl|gs.nt|gs.of|gs.ol|gs.oslo|gs.rl|gs.sf|gs.st|gs.svalbard|gs.tm|gs.tr|gs.va|gs.vf|akrehamn|xn--krehamn-dxa|algard|xn--lgrd-poac|arna|brumunddal|bryne|bronnoysund|xn--brnnysund-m8ac|drobak|xn--drbak-wua|egersund|fetsund|floro|xn--flor-jra|fredrikstad|hokksund|honefoss|xn--hnefoss-q1a|jessheim|jorpeland|xn--jrpeland-54a|kirkenes|kopervik|krokstadelva|langevag|xn--langevg-jxa|leirvik|mjondalen|xn--mjndalen-64a|mo-i-rana|mosjoen|xn--mosjen-eya|nesoddtangen|orkanger|osoyro|xn--osyro-wua|raholt|xn--rholt-mra|sandnessjoen|xn--sandnessjen-ogb|skedsmokorset|slattum|spjelkavik|stathelle|stavern|stjordalshalsen|xn--stjrdalshalsen-sqb|tananger|tranby|vossevangen|afjord|xn--fjord-lra|agdenes|al|xn--l-1fa|alesund|xn--lesund-hua|alstahaug|alta|xn--lt-liac|alaheadju|xn--laheadju-7ya|alvdal|amli|xn--mli-tla|amot|xn--mot-tla|andebu|andoy|xn--andy-ira|andasuolo|ardal|xn--rdal-poa|aremark|arendal|xn--s-1fa|aseral|xn--seral-lra|asker|askim|askvoll|askoy|xn--asky-ira|asnes|xn--snes-poa|audnedaln|aukra|aure|aurland|aurskog-holand|xn--aurskog-hland-jnb|austevoll|austrheim|averoy|xn--avery-yua|balestrand|ballangen|balat|xn--blt-elab|balsfjord|bahccavuotna|xn--bhccavuotna-k7a|bamble|bardu|beardu|beiarn|bajddar|xn--bjddar-pta|baidar|xn--bidr-5nac|berg|bergen|berlevag|xn--berlevg-jxa|bearalvahki|xn--bearalvhki-y4a|bindal|birkenes|bjarkoy|xn--bjarky-fya|bjerkreim|bjugn|bodo|xn--bod-2na|badaddja|xn--bdddj-mrabd|budejju|bokn|bremanger|bronnoy|xn--brnny-wuac|bygland|bykle|barum|xn--brum-voa|bo.telemark|xn--b-5ga.telemark|bo.nordland|xn--b-5ga.nordland|bievat|xn--bievt-0qa|bomlo|xn--bmlo-gra|batsfjord|xn--btsfjord-9za|bahcavuotna|xn--bhcavuotna-s4a|dovre|drammen|drangedal|dyroy|xn--dyry-ira|donna|xn--dnna-gra|eid|eidfjord|eidsberg|eidskog|eidsvoll|eigersund|elverum|enebakk|engerdal|etne|etnedal|evenes|evenassi|xn--eveni-0qa01ga|evje-og-hornnes|farsund|fauske|fuossko|fuoisku|fedje|fet|finnoy|xn--finny-yua|fitjar|fjaler|fjell|flakstad|flatanger|flekkefjord|flesberg|flora|fla|xn--fl-zia|folldal|forsand|fosnes|frei|frogn|froland|frosta|frana|xn--frna-woa|froya|xn--frya-hra|fusa|fyresdal|forde|xn--frde-gra|gamvik|gangaviika|xn--ggaviika-8ya47h|gaular|gausdal|gildeskal|xn--gildeskl-g0a|giske|gjemnes|gjerdrum|gjerstad|gjesdal|gjovik|xn--gjvik-wua|gloppen|gol|gran|grane|granvin|gratangen|grimstad|grong|kraanghke|xn--kranghke-b0a|grue|gulen|hadsel|halden|halsa|hamar|hamaroy|habmer|xn--hbmer-xqa|hapmir|xn--hpmir-xqa|hammerfest|hammarfeasta|xn--hmmrfeasta-s4ac|haram|hareid|harstad|hasvik|aknoluokta|xn--koluokta-7ya57h|hattfjelldal|aarborte|haugesund|hemne|hemnes|hemsedal|heroy.more-og-romsdal|xn--hery-ira.xn--mre-og-romsdal-qqb|heroy.nordland|xn--hery-ira.nordland|hitra|hjartdal|hjelmeland|hobol|xn--hobl-ira|hof|hol|hole|holmestrand|holtalen|xn--holtlen-hxa|hornindal|horten|hurdal|hurum|hvaler|hyllestad|hagebostad|xn--hgebostad-g3a|hoyanger|xn--hyanger-q1a|hoylandet|xn--hylandet-54a|ha|xn--h-2fa|ibestad|inderoy|xn--indery-fya|iveland|jevnaker|jondal|jolster|xn--jlster-bya|karasjok|karasjohka|xn--krjohka-hwab49j|karlsoy|galsa|xn--gls-elac|karmoy|xn--karmy-yua|kautokeino|guovdageaidnu|klepp|klabu|xn--klbu-woa|kongsberg|kongsvinger|kragero|xn--krager-gya|kristiansand|kristiansund|krodsherad|xn--krdsherad-m8a|kvalsund|rahkkeravju|xn--rhkkervju-01af|kvam|kvinesdal|kvinnherad|kviteseid|kvitsoy|xn--kvitsy-fya|kvafjord|xn--kvfjord-nxa|giehtavuoatna|kvanangen|xn--kvnangen-k0a|navuotna|xn--nvuotna-hwa|kafjord|xn--kfjord-iua|gaivuotna|xn--givuotna-8ya|larvik|lavangen|lavagis|loabat|xn--loabt-0qa|lebesby|davvesiida|leikanger|leirfjord|leka|leksvik|lenvik|leangaviika|xn--leagaviika-52b|lesja|levanger|lier|lierne|lillehammer|lillesand|lindesnes|lindas|xn--linds-pra|lom|loppa|lahppi|xn--lhppi-xqa|lund|lunner|luroy|xn--lury-ira|luster|lyngdal|lyngen|ivgu|lardal|lerdal|xn--lrdal-sra|lodingen|xn--ldingen-q1a|lorenskog|xn--lrenskog-54a|loten|xn--lten-gra|malvik|masoy|xn--msy-ula0h|muosat|xn--muost-0qa|mandal|marker|marnardal|masfjorden|meland|meldal|melhus|meloy|xn--mely-ira|meraker|xn--merker-kua|moareke|xn--moreke-jua|midsund|midtre-gauldal|modalen|modum|molde|moskenes|moss|mosvik|malselv|xn--mlselv-iua|malatvuopmi|xn--mlatvuopmi-s4a|namdalseid|aejrie|namsos|namsskogan|naamesjevuemie|xn--nmesjevuemie-tcba|laakesvuemie|nannestad|narvik|narviika|naustdal|nedre-eiker|nes.akershus|nes.buskerud|nesna|nesodden|nesseby|unjarga|xn--unjrga-rta|nesset|nissedal|nittedal|nord-aurdal|nord-fron|nord-odal|norddal|nordkapp|davvenjarga|xn--davvenjrga-y4a|nordre-land|nordreisa|raisa|xn--risa-5na|nore-og-uvdal|notodden|naroy|xn--nry-yla5g|notteroy|xn--nttery-byae|odda|oksnes|xn--ksnes-uua|oppdal|oppegard|xn--oppegrd-ixa|orkdal|orland|xn--rland-uua|orskog|xn--rskog-uua|orsta|xn--rsta-fra|os.hedmark|os.hordaland|osen|osteroy|xn--ostery-fya|ostre-toten|xn--stre-toten-zcb|overhalla|ovre-eiker|xn--vre-eiker-k8a|oyer|xn--yer-zna|oygarden|xn--ygarden-p1a|oystre-slidre|xn--ystre-slidre-ujb|porsanger|porsangu|xn--porsgu-sta26f|porsgrunn|radoy|xn--rady-ira|rakkestad|rana|ruovat|randaberg|rauma|rendalen|rennebu|rennesoy|xn--rennesy-v1a|rindal|ringebu|ringerike|ringsaker|rissa|risor|xn--risr-ira|roan|rollag|rygge|ralingen|xn--rlingen-mxa|rodoy|xn--rdy-0nab|romskog|xn--rmskog-bya|roros|xn--rros-gra|rost|xn--rst-0na|royken|xn--ryken-vua|royrvik|xn--ryrvik-bya|rade|xn--rde-ula|salangen|siellak|saltdal|salat|xn--slt-elab|xn--slat-5na|samnanger|sande.more-og-romsdal|sande.xn--mre-og-romsdal-qqb|sande.vestfold|sandefjord|sandnes|sandoy|xn--sandy-yua|sarpsborg|sauda|sauherad|sel|selbu|selje|seljord|sigdal|siljan|sirdal|skaun|skedsmo|ski|skien|skiptvet|skjervoy|xn--skjervy-v1a|skierva|xn--skierv-uta|skjak|xn--skjk-soa|skodje|skanland|xn--sknland-fxa|skanit|xn--sknit-yqa|smola|xn--smla-hra|snillfjord|snasa|xn--snsa-roa|snoasa|snaase|xn--snase-nra|sogndal|sokndal|sola|solund|songdalen|sortland|spydeberg|stange|stavanger|steigen|steinkjer|stjordal|xn--stjrdal-s1a|stokke|stor-elvdal|stord|stordal|storfjord|omasvuotna|strand|stranda|stryn|sula|suldal|sund|sunndal|surnadal|sveio|svelvik|sykkylven|sogne|xn--sgne-gra|somna|xn--smna-gra|sondre-land|xn--sndre-land-0cb|sor-aurdal|xn--sr-aurdal-l8a|sor-fron|xn--sr-fron-q1a|sor-odal|xn--sr-odal-q1a|sor-varanger|xn--sr-varanger-ggb|matta-varjjat|xn--mtta-vrjjat-k7af|sorfold|xn--srfold-bya|sorreisa|xn--srreisa-q1a|sorum|xn--srum-gra|tana|deatnu|time|tingvoll|tinn|tjeldsund|dielddanuorri|tjome|xn--tjme-hra|tokke|tolga|torsken|tranoy|xn--trany-yua|tromso|xn--troms-zua|tromsa|romsa|trondheim|troandin|trysil|trana|xn--trna-woa|trogstad|xn--trgstad-r1a|tvedestrand|tydal|tynset|tysfjord|divtasvuodna|divttasvuotna|tysnes|tysvar|xn--tysvr-vra|tonsberg|xn--tnsberg-q1a|ullensaker|ullensvang|ulvik|utsira|vadso|xn--vads-jra|cahcesuolo|xn--hcesuolo-7ya35b|vaksdal|valle|vang|vanylven|vardo|xn--vard-jra|varggat|xn--vrggt-xqad|vefsn|vaapste|vega|vegarshei|xn--vegrshei-c0a|vennesla|verdal|verran|vestby|vestnes|vestre-slidre|vestre-toten|vestvagoy|xn--vestvgy-ixa6o|vevelstad|vik|vikna|vindafjord|volda|voss|varoy|xn--vry-yla5g|vagan|xn--vgan-qoa|voagat|vagsoy|xn--vgsy-qoa0j|vaga|xn--vg-yiab|valer.ostfold|xn--vler-qoa.xn--stfold-9xa|valer.hedmark|xn--vler-qoa.hedmark|co|blogspot", np: "*", nr: "biz|info|gov|edu|org|net|com", nu: "merseine|mine|shacknet|nom", nz: "ac|co|cri|geek|gen|govt|health|iwi|kiwi|maori|mil|xn--mori-qsa|net|org|parliament|school|blogspot.co|nym", om: "co|com|edu|gov|med|museum|net|org|pro", onion: "", org: "tele.amune|pimienta|poivron|potager|sweetpepper|ae|us|certmgr|c.cdn77|rsc.cdn77|ssl.origin.cdn77-secure|cloudns|duckdns|tunk|dyndns|blogdns|blogsite|boldlygoingnowhere|dnsalias|dnsdojo|doesntexist|dontexist|doomdns|dvrdns|dynalias|endofinternet|endoftheinternet|from-me|game-host|go.dyndns|gotdns|hobby-site|home.dyndns|homedns|homeftp|homelinux|homeunix|is-a-bruinsfan|is-a-candidate|is-a-celticsfan|is-a-chef|is-a-geek|is-a-knight|is-a-linux-user|is-a-patsfan|is-a-soxfan|is-found|is-lost|is-saved|is-very-bad|is-very-evil|is-very-good|is-very-nice|is-very-sweet|isa-geek|kicks-ass|misconfused|podzone|readmyblog|selfip|sellsyourhome|servebbs|serveftp|servegame|stuff-4-sale|webhop|ddnss|accesscam|camdvr|freeddns|mywire|webredirect|eu|al.eu|asso.eu|at.eu|au.eu|be.eu|bg.eu|ca.eu|cd.eu|ch.eu|cn.eu|cy.eu|cz.eu|de.eu|dk.eu|edu.eu|ee.eu|es.eu|fi.eu|fr.eu|gr.eu|hr.eu|hu.eu|ie.eu|il.eu|in.eu|int.eu|is.eu|it.eu|jp.eu|kr.eu|lt.eu|lu.eu|lv.eu|mc.eu|me.eu|mk.eu|mt.eu|my.eu|net.eu|ng.eu|nl.eu|no.eu|nz.eu|paris.eu|pl.eu|pt.eu|q-a.eu|ro.eu|ru.eu|se.eu|si.eu|sk.eu|tr.eu|uk.eu|us.eu|twmail|fedorainfracloud|fedorapeople|cloud.fedoraproject|hepforge|js|bmoattachments|cable-modem|collegefan|couchpotatofries|mlbfan|mysecuritycamera|nflfan|read-books|ufcfan|hopto|myftp|no-ip|zapto|my-firewall|myfirewall|spdns|dsmynas|familyds|tuxfamily|diskstation|hk|wmflabs|za", pa: "ac|gob|com|org|sld|edu|net|ing|abo|med|nom", pe: "edu|gob|nom|mil|org|com|net|blogspot|nym", pf: "com|org|edu", pg: "*", ph: "com|net|org|gov|edu|ngo|mil|i", pk: "com|net|edu|org|fam|biz|web|gov|gob|gok|gon|gop|gos|info", pl: "com|net|org|aid|agro|atm|auto|biz|edu|gmina|gsm|info|mail|miasta|media|mil|nieruchomosci|nom|pc|powiat|priv|realestate|rel|sex|shop|sklep|sos|szkola|targi|tm|tourism|travel|turystyka|gov|ap.gov|ic.gov|is.gov|us.gov|kmpsp.gov|kppsp.gov|kwpsp.gov|psp.gov|wskr.gov|kwp.gov|mw.gov|ug.gov|um.gov|umig.gov|ugim.gov|upow.gov|uw.gov|starostwo.gov|pa.gov|po.gov|psse.gov|pup.gov|rzgw.gov|sa.gov|so.gov|sr.gov|wsa.gov|sko.gov|uzs.gov|wiih.gov|winb.gov|pinb.gov|wios.gov|witd.gov|wzmiuw.gov|piw.gov|wiw.gov|griw.gov|wif.gov|oum.gov|sdn.gov|zp.gov|uppo.gov|mup.gov|wuoz.gov|konsulat.gov|oirm.gov|augustow|babia-gora|bedzin|beskidy|bialowieza|bialystok|bielawa|bieszczady|boleslawiec|bydgoszcz|bytom|cieszyn|czeladz|czest|dlugoleka|elblag|elk|glogow|gniezno|gorlice|grajewo|ilawa|jaworzno|jelenia-gora|jgora|kalisz|kazimierz-dolny|karpacz|kartuzy|kaszuby|katowice|kepno|ketrzyn|klodzko|kobierzyce|kolobrzeg|konin|konskowola|kutno|lapy|lebork|legnica|lezajsk|limanowa|lomza|lowicz|lubin|lukow|malbork|malopolska|mazowsze|mazury|mielec|mielno|mragowo|naklo|nowaruda|nysa|olawa|olecko|olkusz|olsztyn|opoczno|opole|ostroda|ostroleka|ostrowiec|ostrowwlkp|pila|pisz|podhale|podlasie|polkowice|pomorze|pomorskie|prochowice|pruszkow|przeworsk|pulawy|radom|rawa-maz|rybnik|rzeszow|sanok|sejny|slask|slupsk|sosnowiec|stalowa-wola|skoczow|starachowice|stargard|suwalki|swidnica|swiebodzin|swinoujscie|szczecin|szczytno|tarnobrzeg|tgory|turek|tychy|ustka|walbrzych|warmia|warszawa|waw|wegrow|wielun|wlocl|wloclawek|wodzislaw|wolomin|wroclaw|zachpomor|zagan|zarow|zgora|zgorzelec|beep|co|art|gliwice|krakow|poznan|wroc|zakopane|gda|gdansk|gdynia|med|sopot", pm: "", pn: "gov|co|org|edu|net", post: "", pr: "com|net|org|gov|edu|isla|pro|biz|info|name|est|prof|ac", pro: "aaa|aca|acct|avocat|bar|cpa|eng|jur|law|med|recht|cloudns", ps: "edu|gov|sec|plo|com|org|net", pt: "net|gov|org|edu|int|publ|com|nome|blogspot|nym", pw: "co|ne|or|ed|go|belau|cloudns|nom", py: "com|coop|edu|gov|mil|net|org", qa: "com|edu|gov|mil|name|net|org|sch|blogspot|nom", re: "asso|com|nom|blogspot", ro: "arts|com|firm|info|nom|nt|org|rec|store|tm|www|shop|blogspot", rs: "ac|co|edu|gov|in|org|blogspot|nom", ru: "ac|edu|gov|int|mil|test|adygeya|bashkiria|bir|cbg|com|dagestan|grozny|kalmykia|kustanai|marine|mordovia|msk|mytis|nalchik|nov|pyatigorsk|spb|vladikavkaz|vladimir|blogspot|hb.cldmail|net|org|pp", rw: "gov|net|edu|ac|com|co|int|mil|gouv", sa: "com|net|org|gov|med|pub|edu|sch", sb: "com|edu|gov|net|org", sc: "com|gov|net|org|edu", sd: "com|net|org|edu|med|tv|gov|info", se: "a|ac|b|bd|brand|c|d|e|f|fh|fhsk|fhv|g|h|i|k|komforb|kommunalforbund|komvux|l|lanbib|m|n|naturbruksgymn|o|org|p|parti|pp|press|r|s|t|tm|u|w|x|y|z|com|blogspot", sg: "com|net|org|gov|edu|per|blogspot", sh: "com|net|gov|org|mil|hashbang|*platform|now", si: "blogspot|nom", sj: "", sk: "blogspot|nym", sl: "com|net|edu|gov|org", sm: "", sn: "art|com|edu|gouv|org|perso|univ|blogspot", so: "com|net|org", sr: "", st: "co|com|consulado|edu|embaixada|gov|mil|net|org|principe|saotome|store", su: "abkhazia|adygeya|aktyubinsk|arkhangelsk|armenia|ashgabad|azerbaijan|balashov|bashkiria|bryansk|bukhara|chimkent|dagestan|east-kazakhstan|exnet|georgia|grozny|ivanovo|jambyl|kalmykia|kaluga|karacol|karaganda|karelia|khakassia|krasnodar|kurgan|kustanai|lenug|mangyshlak|mordovia|msk|murmansk|nalchik|navoi|north-kazakhstan|nov|obninsk|penza|pokrovsk|sochi|spb|tashkent|termez|togliatti|troitsk|tselinograd|tula|tuva|vladikavkaz|vladimir|vologda|nym", sv: "com|edu|gob|org|red", sx: "gov|nym", sy: "edu|gov|net|mil|com|org", sz: "co|ac|org", tc: "", td: "blogspot", tel: "", tf: "", tg: "", th: "ac|co|go|in|mi|net|or", tj: "ac|biz|co|com|edu|go|gov|int|mil|name|net|nic|org|test|web", tk: "", tl: "gov", tm: "com|co|org|net|nom|gov|mil|edu", tn: "com|ens|fin|gov|ind|intl|nat|net|org|info|perso|tourism|edunet|rnrt|rns|rnu|mincom|agrinet|defense|turen", to: "com|gov|net|org|edu|mil|vpnplus", tr: "com|info|biz|net|org|web|gen|tv|av|dr|bbs|name|tel|gov|bel|pol|mil|k12|edu|kep|nc|gov.nc|blogspot.com", travel: "", tt: "co|com|org|net|biz|info|pro|int|coop|jobs|mobi|travel|museum|aero|name|gov|edu", tv: "dyndns|better-than|on-the-web|worse-than", tw: "edu|gov|mil|com|net|org|idv|game|ebiz|club|xn--zf0ao64a|xn--uc0atv|xn--czrw28b|mymailer.com|url|blogspot|nym", tz: "ac|co|go|hotel|info|me|mil|mobi|ne|or|sc|tv", ua: "com|edu|gov|in|net|org|cherkassy|cherkasy|chernigov|chernihiv|chernivtsi|chernovtsy|ck|cn|cr|crimea|cv|dn|dnepropetrovsk|dnipropetrovsk|dominic|donetsk|dp|if|ivano-frankivsk|kh|kharkiv|kharkov|kherson|khmelnitskiy|khmelnytskyi|kiev|kirovograd|km|kr|krym|ks|kv|kyiv|lg|lt|lugansk|lutsk|lv|lviv|mk|mykolaiv|nikolaev|od|odesa|odessa|pl|poltava|rivne|rovno|rv|sb|sebastopol|sevastopol|sm|sumy|te|ternopil|uz|uzhgorod|vinnica|vinnytsia|vn|volyn|yalta|zaporizhzhe|zaporizhzhia|zhitomir|zhytomyr|zp|zt|cc|inf|ltd|biz|co|pp", ug: "co|or|ac|sc|go|ne|com|org|blogspot|nom", uk: "ac|co|gov|ltd|me|net|nhs|org|plc|police|*sch|service.gov|homeoffice.gov|blogspot.co|no-ip.co|wellbeingzone.co", us: "dni|fed|isa|kids|nsn|ak|al|ar|as|az|ca|co|ct|dc|de|fl|ga|gu|hi|ia|id|il|in|ks|ky|la|ma|md|me|mi|mn|mo|ms|mt|nc|nd|ne|nh|nj|nm|nv|ny|oh|ok|or|pa|pr|ri|sc|sd|tn|tx|ut|vi|vt|va|wa|wi|wv|wy|k12.ak|k12.al|k12.ar|k12.as|k12.az|k12.ca|k12.co|k12.ct|k12.dc|k12.de|k12.fl|k12.ga|k12.gu|k12.ia|k12.id|k12.il|k12.in|k12.ks|k12.ky|k12.la|k12.ma|k12.md|k12.me|k12.mi|k12.mn|k12.mo|k12.ms|k12.mt|k12.nc|k12.ne|k12.nh|k12.nj|k12.nm|k12.nv|k12.ny|k12.oh|k12.ok|k12.or|k12.pa|k12.pr|k12.ri|k12.sc|k12.tn|k12.tx|k12.ut|k12.vi|k12.vt|k12.va|k12.wa|k12.wi|k12.wy|cc.ak|cc.al|cc.ar|cc.as|cc.az|cc.ca|cc.co|cc.ct|cc.dc|cc.de|cc.fl|cc.ga|cc.gu|cc.hi|cc.ia|cc.id|cc.il|cc.in|cc.ks|cc.ky|cc.la|cc.ma|cc.md|cc.me|cc.mi|cc.mn|cc.mo|cc.ms|cc.mt|cc.nc|cc.nd|cc.ne|cc.nh|cc.nj|cc.nm|cc.nv|cc.ny|cc.oh|cc.ok|cc.or|cc.pa|cc.pr|cc.ri|cc.sc|cc.sd|cc.tn|cc.tx|cc.ut|cc.vi|cc.vt|cc.va|cc.wa|cc.wi|cc.wv|cc.wy|lib.ak|lib.al|lib.ar|lib.as|lib.az|lib.ca|lib.co|lib.ct|lib.dc|lib.fl|lib.ga|lib.gu|lib.hi|lib.ia|lib.id|lib.il|lib.in|lib.ks|lib.ky|lib.la|lib.ma|lib.md|lib.me|lib.mi|lib.mn|lib.mo|lib.ms|lib.mt|lib.nc|lib.nd|lib.ne|lib.nh|lib.nj|lib.nm|lib.nv|lib.ny|lib.oh|lib.ok|lib.or|lib.pa|lib.pr|lib.ri|lib.sc|lib.sd|lib.tn|lib.tx|lib.ut|lib.vi|lib.vt|lib.va|lib.wa|lib.wi|lib.wy|pvt.k12.ma|chtr.k12.ma|paroch.k12.ma|cloudns|drud|is-by|land-4-sale|stuff-4-sale|golffan|noip|pointto|lib.de", uy: "com|edu|gub|mil|net|org|blogspot.com|nom", uz: "co|com|net|org", va: "", vc: "com|net|org|gov|mil|edu|nom", ve: "arts|co|com|e12|edu|firm|gob|gov|info|int|mil|net|org|rec|store|tec|web", vg: "nom", vi: "co|com|k12|net|org", vn: "com|net|org|edu|gov|int|ac|biz|info|name|pro|health|blogspot", vu: "com|edu|net|org", wf: "", ws: "com|net|org|gov|edu|*advisor|dyndns|mypets", yt: "", "xn--mgbaam7a8h": "", "xn--y9a3aq": "", "xn--54b7fta0cc": "", "xn--90ae": "", "xn--90ais": "", "xn--fiqs8s": "", "xn--fiqz9s": "", "xn--lgbbat1ad8j": "", "xn--wgbh1c": "", "xn--e1a4c": "", "xn--node": "", "xn--qxam": "", "xn--j6w193g": "", "xn--2scrj9c": "", "xn--3hcrj9c": "", "xn--45br5cyl": "", "xn--h2breg3eve": "", "xn--h2brj9c8c": "", "xn--mgbgu82a": "", "xn--rvc1e0am3e": "", "xn--h2brj9c": "", "xn--mgbbh1a71e": "", "xn--fpcrj9c3d": "", "xn--gecrj9c": "", "xn--s9brj9c": "", "xn--45brj9c": "", "xn--xkc2dl3a5ee0h": "", "xn--mgba3a4f16a": "", "xn--mgba3a4fra": "", "xn--mgbtx2b": "", "xn--mgbayh7gpa": "", "xn--3e0b707e": "", "xn--80ao21a": "", "xn--fzc2c9e2c": "", "xn--xkc2al3hye2a": "", "xn--mgbc0a9azcg": "", "xn--d1alf": "", "xn--l1acc": "", "xn--mix891f": "", "xn--mix082f": "", "xn--mgbx4cd0ab": "", "xn--mgb9awbf": "", "xn--mgbai9azgqp6j": "", "xn--mgbai9a5eva00b": "", "xn--ygbi2ammx": "", "xn--90a3ac": "xn--o1ac|xn--c1avg|xn--90azh|xn--d1at|xn--o1ach|xn--80au", "xn--p1ai": "", "xn--wgbl6a": "", "xn--mgberp4a5d4ar": "", "xn--mgberp4a5d4a87g": "", "xn--mgbqly7c0a67fbc": "", "xn--mgbqly7cvafr": "", "xn--mgbpl2fh": "", "xn--yfro4i67o": "", "xn--clchc0ea0b2g2a9gcd": "", "xn--ogbpf8fl": "", "xn--mgbtf8fl": "", "xn--o3cw4h": "xn--12c1fe0br|xn--12co0c3b4eva|xn--h3cuzk1di|xn--o3cyx2a|xn--m3ch0j3a|xn--12cfi8ixb8l", "xn--pgbs0dh": "", "xn--kpry57d": "", "xn--kprw13d": "", "xn--nnx388a": "", "xn--j1amh": "", "xn--mgb2ddes": "", xxx: "", ye: "*", za: "ac|agric|alt|co|edu|gov|grondar|law|mil|net|ngo|nis|nom|org|school|tm|web|blogspot.co", zm: "ac|biz|co|com|edu|gov|info|mil|net|org|sch", zw: "ac|co|gov|mil|org", aaa: "", aarp: "", abarth: "", abb: "", abbott: "", abbvie: "", abc: "", able: "", abogado: "", abudhabi: "", academy: "", accenture: "", accountant: "", accountants: "", aco: "", active: "", actor: "", adac: "", ads: "", adult: "", aeg: "", aetna: "", afamilycompany: "", afl: "", africa: "", agakhan: "", agency: "", aig: "", aigo: "", airbus: "", airforce: "", airtel: "", akdn: "", alfaromeo: "", alibaba: "", alipay: "", allfinanz: "", allstate: "", ally: "", alsace: "", alstom: "", americanexpress: "", americanfamily: "", amex: "", amfam: "", amica: "", amsterdam: "", analytics: "", android: "", anquan: "", anz: "", aol: "", apartments: "", app: "", apple: "", aquarelle: "", arab: "", aramco: "", archi: "", army: "", art: "", arte: "", asda: "", associates: "", athleta: "", attorney: "", auction: "", audi: "", audible: "", audio: "", auspost: "", author: "", auto: "", autos: "", avianca: "", aws: "", axa: "", azure: "", baby: "", baidu: "", banamex: "", bananarepublic: "", band: "", bank: "", bar: "", barcelona: "", barclaycard: "", barclays: "", barefoot: "", bargains: "", baseball: "", basketball: "", bauhaus: "", bayern: "", bbc: "", bbt: "", bbva: "", bcg: "", bcn: "", beats: "", beauty: "", beer: "", bentley: "", berlin: "", best: "", bestbuy: "", bet: "", bharti: "", bible: "", bid: "", bike: "", bing: "", bingo: "", bio: "", black: "", blackfriday: "", blanco: "", blockbuster: "", blog: "", bloomberg: "", blue: "", bms: "", bmw: "", bnl: "", bnpparibas: "", boats: "", boehringer: "", bofa: "", bom: "", bond: "", boo: "", book: "", booking: "", boots: "", bosch: "", bostik: "", boston: "", bot: "", boutique: "", box: "", bradesco: "", bridgestone: "", broadway: "", broker: "", brother: "", brussels: "", budapest: "", bugatti: "", build: "", builders: "", business: "", buy: "", buzz: "", bzh: "", cab: "", cafe: "", cal: "", call: "", calvinklein: "", cam: "", camera: "", camp: "", cancerresearch: "", canon: "", capetown: "", capital: "", capitalone: "", car: "", caravan: "", cards: "", care: "", career: "", careers: "", cars: "", cartier: "", casa: "", case: "", caseih: "", cash: "", casino: "", catering: "", catholic: "", cba: "", cbn: "", cbre: "", cbs: "", ceb: "", center: "", ceo: "", cern: "", cfa: "", cfd: "", chanel: "", channel: "", chase: "", chat: "", cheap: "", chintai: "", chloe: "", christmas: "", chrome: "", chrysler: "", church: "", cipriani: "", circle: "", cisco: "", citadel: "", citi: "", citic: "", city: "", cityeats: "", claims: "", cleaning: "", click: "", clinic: "", clinique: "", clothing: "", cloud: "myfusion|*statics|*magentosite|vapor|*sensiosite|trafficplex", club: "cloudns", clubmed: "", coach: "", codes: "", coffee: "", college: "", cologne: "", comcast: "", commbank: "", community: "", company: "", compare: "", computer: "", comsec: "", condos: "", construction: "", consulting: "", contact: "", contractors: "", cooking: "", cookingchannel: "", cool: "de", corsica: "", country: "", coupon: "", coupons: "", courses: "", credit: "", creditcard: "", creditunion: "", cricket: "", crown: "", crs: "", cruise: "", cruises: "", csc: "", cuisinella: "", cymru: "", cyou: "", dabur: "", dad: "", dance: "", data: "", date: "", dating: "", datsun: "", day: "", dclk: "", dds: "", deal: "", dealer: "", deals: "", degree: "", delivery: "", dell: "", deloitte: "", delta: "", democrat: "", dental: "", dentist: "", desi: "", design: "", dev: "", dhl: "", diamonds: "", diet: "", digital: "", direct: "", directory: "", discount: "", discover: "", dish: "", diy: "", dnp: "", docs: "", doctor: "", dodge: "", dog: "", doha: "", domains: "", dot: "", download: "", drive: "", dtv: "", dubai: "", duck: "", dunlop: "", duns: "", dupont: "", durban: "", dvag: "", dvr: "", earth: "", eat: "", eco: "", edeka: "", education: "", email: "", emerck: "", energy: "", engineer: "", engineering: "", enterprises: "", epost: "", epson: "", equipment: "", ericsson: "", erni: "", esq: "", estate: "*compute", esurance: "", etisalat: "", eurovision: "", eus: "user.party", events: "", everbank: "", exchange: "", expert: "", exposed: "", express: "", extraspace: "", fage: "", fail: "", fairwinds: "", faith: "ybo", family: "", fan: "", fans: "", farm: "storj", farmers: "", fashion: "", fast: "", fedex: "", feedback: "", ferrari: "", ferrero: "", fiat: "", fidelity: "", fido: "", film: "", final: "", finance: "", financial: "", fire: "", firestone: "", firmdale: "", fish: "", fishing: "", fit: "ptplus", fitness: "", flickr: "", flights: "", flir: "", florist: "", flowers: "", fly: "", foo: "", food: "", foodnetwork: "", football: "", ford: "", forex: "", forsale: "", forum: "", foundation: "", fox: "", free: "", fresenius: "", frl: "", frogans: "", frontdoor: "", frontier: "", ftr: "", fujitsu: "", fujixerox: "", fun: "", fund: "", furniture: "", futbol: "", fyi: "", gal: "", gallery: "", gallo: "", gallup: "", game: "", games: "", gap: "", garden: "", gbiz: "", gdn: "", gea: "", gent: "", genting: "", george: "", ggee: "", gift: "", gifts: "", gives: "", giving: "", glade: "", glass: "", gle: "", global: "", globo: "", gmail: "", gmbh: "", gmo: "", gmx: "", godaddy: "", gold: "", goldpoint: "", golf: "", goo: "", goodhands: "", goodyear: "", goog: "cloud", google: "", gop: "", got: "", grainger: "", graphics: "", gratis: "", green: "", gripe: "", grocery: "", group: "", guardian: "", gucci: "", guge: "", guide: "", guitars: "", guru: "", hair: "", hamburg: "", hangout: "", haus: "", hbo: "", hdfc: "", hdfcbank: "", health: "", healthcare: "", help: "", helsinki: "", here: "", hermes: "", hgtv: "", hiphop: "", hisamitsu: "", hitachi: "", hiv: "", hkt: "", hockey: "", holdings: "", holiday: "", homedepot: "", homegoods: "", homes: "", homesense: "", honda: "", honeywell: "", horse: "", hospital: "", host: "cloudaccess|freesite", hosting: "opencraft", hot: "", hoteles: "", hotels: "", hotmail: "", house: "", how: "", hsbc: "", htc: "", hughes: "", hyatt: "", hyundai: "", ibm: "", icbc: "", ice: "", icu: "", ieee: "", ifm: "", ikano: "", imamat: "", imdb: "", immo: "", immobilien: "", industries: "", infiniti: "", ing: "", ink: "", institute: "", insurance: "", insure: "", intel: "", international: "", intuit: "", investments: "", ipiranga: "", irish: "", iselect: "", ismaili: "", ist: "", istanbul: "", itau: "", itv: "", iveco: "", iwc: "", jaguar: "", java: "", jcb: "", jcp: "", jeep: "", jetzt: "", jewelry: "", jio: "", jlc: "", jll: "", jmp: "", jnj: "", joburg: "", jot: "", joy: "", jpmorgan: "", jprs: "", juegos: "", juniper: "", kaufen: "", kddi: "", kerryhotels: "", kerrylogistics: "", kerryproperties: "", kfh: "", kia: "", kim: "", kinder: "", kindle: "", kitchen: "", kiwi: "", koeln: "", komatsu: "", kosher: "", kpmg: "", kpn: "", krd: "co|edu", kred: "", kuokgroup: "", kyoto: "", lacaixa: "", ladbrokes: "", lamborghini: "", lamer: "", lancaster: "", lancia: "", lancome: "", land: "static|dev.static|sites.static", landrover: "", lanxess: "", lasalle: "", lat: "", latino: "", latrobe: "", law: "", lawyer: "", lds: "", lease: "", leclerc: "", lefrak: "", legal: "", lego: "", lexus: "", lgbt: "", liaison: "", lidl: "", life: "", lifeinsurance: "", lifestyle: "", lighting: "", like: "", lilly: "", limited: "", limo: "", lincoln: "", linde: "", link: "cyon|mypep", lipsy: "", live: "", living: "", lixil: "", loan: "", loans: "", locker: "", locus: "", loft: "", lol: "", london: "", lotte: "", lotto: "", love: "", lpl: "", lplfinancial: "", ltd: "", ltda: "", lundbeck: "", lupin: "", luxe: "", luxury: "", macys: "", madrid: "", maif: "", maison: "", makeup: "", man: "", management: "router", mango: "", map: "", market: "", marketing: "", markets: "", marriott: "", marshalls: "", maserati: "", mattel: "", mba: "", mcd: "", mcdonalds: "", mckinsey: "", med: "", media: "", meet: "", melbourne: "", meme: "", memorial: "", men: "", menu: "", meo: "", merckmsd: "", metlife: "", miami: "", microsoft: "", mini: "", mint: "", mit: "", mitsubishi: "", mlb: "", mls: "", mma: "", mobile: "", mobily: "", moda: "", moe: "", moi: "", mom: "", monash: "", money: "", monster: "", montblanc: "", mopar: "", mormon: "", mortgage: "", moscow: "", moto: "", motorcycles: "", mov: "", movie: "", movistar: "", msd: "", mtn: "", mtpc: "", mtr: "", mutual: "", nab: "", nadex: "", nagoya: "", nationwide: "", natura: "", navy: "", nba: "", nec: "", netbank: "", netflix: "", network: "*alces", neustar: "", new: "", newholland: "", news: "", next: "", nextdirect: "", nexus: "", nfl: "", ngo: "", nhk: "", nico: "", nike: "", nikon: "", ninja: "", nissan: "", nissay: "", nokia: "", northwesternmutual: "", norton: "", now: "", nowruz: "", nowtv: "", nra: "", nrw: "", ntt: "", nyc: "", obi: "", observer: "", off: "", office: "", okinawa: "", olayan: "", olayangroup: "", oldnavy: "", ollo: "", omega: "", one: "homelink", ong: "", onl: "", online: "barsy", onyourside: "", ooo: "", open: "", oracle: "", orange: "", organic: "", origins: "", osaka: "", otsuka: "", ott: "", ovh: "nerdpol", page: "", pamperedchef: "", panasonic: "", panerai: "", paris: "", pars: "", partners: "", parts: "", party: "ybo", passagens: "", pay: "", pccw: "", pet: "", pfizer: "", pharmacy: "", phd: "", philips: "", phone: "", photo: "", photography: "", photos: "", physio: "", piaget: "", pics: "", pictet: "", pictures: "1337", pid: "", pin: "", ping: "", pink: "", pioneer: "", pizza: "", place: "", play: "", playstation: "", plumbing: "", plus: "", pnc: "", pohl: "", poker: "", politie: "", porn: "", pramerica: "", praxi: "", press: "", prime: "", prod: "", productions: "", prof: "", progressive: "", promo: "", properties: "", property: "", protection: "", pru: "", prudential: "", pub: "", pwc: "", qpon: "", quebec: "", quest: "", qvc: "", racing: "", radio: "", raid: "", read: "", realestate: "", realtor: "", realty: "", recipes: "", red: "", redstone: "", redumbrella: "", rehab: "", reise: "", reisen: "", reit: "", reliance: "", ren: "", rent: "", rentals: "", repair: "", report: "", republican: "", rest: "", restaurant: "", review: "ybo", reviews: "", rexroth: "", rich: "", richardli: "", ricoh: "", rightathome: "", ril: "", rio: "", rip: "clan", rmit: "", rocher: "", rocks: "myddns|lima-city|webspace", rodeo: "", rogers: "", room: "", rsvp: "", rugby: "", ruhr: "", run: "", rwe: "", ryukyu: "", saarland: "", safe: "", safety: "", sakura: "", sale: "", salon: "", samsclub: "", samsung: "", sandvik: "", sandvikcoromant: "", sanofi: "", sap: "", sapo: "", sarl: "", sas: "", save: "", saxo: "", sbi: "", sbs: "", sca: "", scb: "", schaeffler: "", schmidt: "", scholarships: "", school: "", schule: "", schwarz: "", science: "ybo", scjohnson: "", scor: "", scot: "", search: "", seat: "", secure: "", security: "", seek: "", select: "", sener: "", services: "", ses: "", seven: "", sew: "", sex: "", sexy: "", sfr: "", shangrila: "", sharp: "", shaw: "", shell: "", shia: "", shiksha: "", shoes: "", shop: "", shopping: "", shouji: "", show: "", showtime: "", shriram: "", silk: "", sina: "", singles: "", site: "cyon|*platformsh", ski: "", skin: "", sky: "", skype: "", sling: "", smart: "", smile: "", sncf: "", soccer: "", social: "", softbank: "", software: "", sohu: "", solar: "", solutions: "", song: "", sony: "", soy: "", space: "stackspace|uber|xs4all", spiegel: "", spot: "", spreadbetting: "", srl: "", srt: "", stada: "", staples: "", star: "", starhub: "", statebank: "", statefarm: "", statoil: "", stc: "", stcgroup: "", stockholm: "", storage: "", store: "", stream: "", studio: "", study: "", style: "", sucks: "", supplies: "", supply: "", support: "barsy", surf: "", surgery: "", suzuki: "", swatch: "", swiftcover: "", swiss: "", sydney: "", symantec: "", systems: "knightpoint", tab: "", taipei: "", talk: "", taobao: "", target: "", tatamotors: "", tatar: "", tattoo: "", tax: "", taxi: "", tci: "", tdk: "", team: "", tech: "", technology: "", telecity: "", telefonica: "", temasek: "", tennis: "", teva: "", thd: "", theater: "", theatre: "", tiaa: "", tickets: "", tienda: "", tiffany: "", tips: "", tires: "", tirol: "", tjmaxx: "", tjx: "", tkmaxx: "", tmall: "", today: "", tokyo: "", tools: "", top: "", toray: "", toshiba: "", total: "", tours: "", town: "", toyota: "", toys: "", trade: "ybo", trading: "", training: "", travelchannel: "", travelers: "", travelersinsurance: "", trust: "", trv: "", tube: "", tui: "", tunes: "", tushu: "", tvs: "", ubank: "", ubs: "", uconnect: "", unicom: "", university: "", uno: "", uol: "", ups: "", vacations: "", vana: "", vanguard: "", vegas: "", ventures: "", verisign: "", versicherung: "", vet: "", viajes: "", video: "", vig: "", viking: "", villas: "", vin: "", vip: "", virgin: "", visa: "", vision: "", vista: "", vistaprint: "", viva: "", vivo: "", vlaanderen: "", vodka: "", volkswagen: "", volvo: "", vote: "", voting: "", voto: "", voyage: "", vuelos: "", wales: "", walmart: "", walter: "", wang: "", wanggou: "", warman: "", watch: "", watches: "", weather: "", weatherchannel: "", webcam: "", weber: "", website: "", wed: "", wedding: "", weibo: "", weir: "", whoswho: "", wien: "", wiki: "", williamhill: "", win: "", windows: "", wine: "", winners: "", wme: "", wolterskluwer: "", woodside: "", work: "", works: "", world: "", wow: "", wtc: "", wtf: "", xbox: "", xerox: "", xfinity: "", xihuan: "", xin: "", "xn--11b4c3d": "", "xn--1ck2e1b": "", "xn--1qqw23a": "", "xn--30rr7y": "", "xn--3bst00m": "", "xn--3ds443g": "", "xn--3oq18vl8pn36a": "", "xn--3pxu8k": "", "xn--42c2d9a": "", "xn--45q11c": "", "xn--4gbrim": "", "xn--55qw42g": "", "xn--55qx5d": "", "xn--5su34j936bgsg": "", "xn--5tzm5g": "", "xn--6frz82g": "", "xn--6qq986b3xl": "", "xn--80adxhks": "", "xn--80aqecdr1a": "", "xn--80asehdb": "", "xn--80aswg": "", "xn--8y0a063a": "", "xn--9dbq2a": "", "xn--9et52u": "", "xn--9krt00a": "", "xn--b4w605ferd": "", "xn--bck1b9a5dre4c": "", "xn--c1avg": "", "xn--c2br7g": "", "xn--cck2b3b": "", "xn--cg4bki": "", "xn--czr694b": "", "xn--czrs0t": "", "xn--czru2d": "", "xn--d1acj3b": "", "xn--eckvdtc9d": "", "xn--efvy88h": "", "xn--estv75g": "", "xn--fct429k": "", "xn--fhbei": "", "xn--fiq228c5hs": "", "xn--fiq64b": "", "xn--fjq720a": "", "xn--flw351e": "", "xn--fzys8d69uvgm": "", "xn--g2xx48c": "", "xn--gckr3f0f": "", "xn--gk3at1e": "", "xn--hxt814e": "", "xn--i1b6b1a6a2e": "", "xn--imr513n": "", "xn--io0a7i": "", "xn--j1aef": "", "xn--jlq61u9w7b": "", "xn--jvr189m": "", "xn--kcrx77d1x4a": "", "xn--kpu716f": "", "xn--kput3i": "", "xn--mgba3a3ejt": "", "xn--mgba7c0bbn0a": "", "xn--mgbaakc7dvf": "", "xn--mgbab2bd": "", "xn--mgbb9fbpob": "", "xn--mgbca7dzdo": "", "xn--mgbi4ecexp": "", "xn--mgbt3dhd": "", "xn--mk1bu44c": "", "xn--mxtq1m": "", "xn--ngbc5azd": "", "xn--ngbe9e0a": "", "xn--ngbrx": "", "xn--nqv7f": "", "xn--nqv7fs00ema": "", "xn--nyqy26a": "", "xn--p1acf": "", "xn--pbt977c": "", "xn--pssy2u": "", "xn--q9jyb4c": "", "xn--qcka1pmc": "", "xn--rhqv96g": "", "xn--rovu88b": "", "xn--ses554g": "", "xn--t60b56a": "", "xn--tckwe": "", "xn--tiq49xqyj": "", "xn--unup4y": "", "xn--vermgensberater-ctb": "", "xn--vermgensberatung-pwb": "", "xn--vhquv": "", "xn--vuq861b": "", "xn--w4r85el8fhu5dnra": "", "xn--w4rs40l": "", "xn--xhq521b": "", "xn--zfr164b": "", xperia: "", xyz: "blogsite|fhapp", yachts: "", yahoo: "", yamaxun: "", yandex: "", yodobashi: "", yoga: "", yokohama: "", you: "", youtube: "", yun: "", zappos: "", zara: "", zero: "", zip: "", zippo: "", zone: "*triton|lima", zuerich: "" };
  }
});

// node_modules/tldjs/lib/clean-host.js
var require_clean_host = __commonJS({
  "node_modules/tldjs/lib/clean-host.js"(exports2, module2) {
    var URL = require("url");
    var hasPrefixRE = /^(([a-z][a-z0-9+.-]*)?:)?\/\//;
    var invalidHostnameChars = /[^A-Za-z0-9.-]/;
    function rtrim(value) {
      return String(value).replace(/[.]+$/g, "");
    }
    module2.exports = function cleanHostValue(value) {
      value = String(value).trim().toLowerCase();
      var parts = URL.parse(hasPrefixRE.test(value) ? value : "//" + value, null, true);
      if (parts.hostname && !invalidHostnameChars.test(parts.hostname)) {
        return rtrim(parts.hostname);
      }
      if (!invalidHostnameChars.test(value)) {
        return rtrim(value);
      }
      return "";
    };
  }
});

// node_modules/tldjs/lib/escape-regexp.js
var require_escape_regexp = __commonJS({
  "node_modules/tldjs/lib/escape-regexp.js"(exports2, module2) {
    module2.exports = function escapeRegExp(s) {
      return String(s).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };
  }
});

// node_modules/tldjs/lib/rule.js
var require_rule = __commonJS({
  "node_modules/tldjs/lib/rule.js"(exports2, module2) {
    "use strict";
    function Rule(data) {
      data = data || {};
      this.exception = data.exception || false;
      this.firstLevel = data.firstLevel || "";
      this.secondLevel = data.secondLevel || null;
      this.isHost = data.isHost || false;
      this.source = data.source || "";
      this.wildcard = data.wildcard || false;
    }
    Rule.prototype.getNormalXld = function getNormalXld() {
      return (this.secondLevel ? "." + this.secondLevel : "") + "." + this.firstLevel;
    };
    Rule.prototype.getNormalPattern = function getNormalPattern() {
      return (this.secondLevel ? "\\." + this.secondLevel : "") + "\\." + this.firstLevel;
    };
    Rule.prototype.getWildcardPattern = function getWildcardPattern() {
      return "\\.[^\\.]+" + this.getNormalXld().replace(/\./g, "\\.");
    };
    Rule.prototype.getExceptionPattern = function getExceptionPattern() {
      return (this.secondLevel || "") + "\\." + this.firstLevel;
    };
    Rule.prototype.getPattern = function getPattern(before, after) {
      var pattern = "";
      before = before === void 0 ? "(" : before + "";
      after = after === void 0 ? ")$" : after + "";
      if (this.exception === true) {
        pattern = this.getExceptionPattern();
      } else if (this.isHost === true) {
        pattern = this.firstLevel;
      } else {
        pattern = "[^\\.]+" + (this.wildcard ? this.getWildcardPattern() : this.getNormalPattern());
      }
      return before + pattern + after;
    };
    module2.exports = Rule;
  }
});

// node_modules/tldjs/lib/polyfills/array-map.js
var require_array_map = __commonJS({
  "node_modules/tldjs/lib/polyfills/array-map.js"(exports2, module2) {
    module2.exports = function _mapFunction(thisVal, fun) {
      "use strict";
      if (thisVal === void 0 || thisVal === null) {
        throw new TypeError();
      }
      var t = Object(thisVal);
      var len = t.length >>> 0;
      if (typeof fun !== "function") {
        throw new TypeError();
      }
      var res = new Array(len);
      var thisArg = arguments.length >= 3 ? arguments[2] : void 0;
      for (var i = 0; i < len; i++) {
        if (i in t) {
          res[i] = fun.call(thisArg, t[i], i, t);
        }
      }
      return res;
    };
  }
});

// node_modules/tldjs/lib/tld-rules.js
var require_tld_rules = __commonJS({
  "node_modules/tldjs/lib/tld-rules.js"(exports2, module2) {
    "use strict";
    var Rule = require_rule();
    var map = require_array_map();
    module2.exports = function getRulesForTld(allRules, tld, default_rule) {
      var exception = "!";
      var wildcard = "*";
      var append_tld_rule = true;
      var rules = allRules[tld];
      if (Object.prototype.toString.call(rules) === "[object Array]") {
        return rules;
      }
      if (rules === void 0) {
        return default_rule ? [default_rule] : [];
      }
      rules = map(rules.split("|"), function transformAsRule(sld) {
        var first_bit = sld[0];
        if (first_bit === exception || first_bit === wildcard) {
          sld = sld.slice(1);
          if (!sld) {
            append_tld_rule = false;
          }
        }
        return new Rule({
          "firstLevel": tld,
          "secondLevel": sld,
          "exception": first_bit === exception,
          "wildcard": first_bit === wildcard
        });
      });
      if (append_tld_rule) {
        rules.unshift(new Rule({
          "firstLevel": tld
        }));
      }
      allRules[tld] = rules.reverse();
      return rules;
    };
  }
});

// node_modules/tldjs/lib/is-valid.js
var require_is_valid = __commonJS({
  "node_modules/tldjs/lib/is-valid.js"(exports2, module2) {
    module2.exports = function isValid(validHosts, host) {
      return typeof host === "string" && (validHosts.indexOf(host) !== -1 || host.indexOf(".") !== -1 && host[0] !== ".");
    };
  }
});

// node_modules/tldjs/lib/from-host.js
var require_from_host = __commonJS({
  "node_modules/tldjs/lib/from-host.js"(exports2, module2) {
    module2.exports = function extractTldFromHost(host) {
      return host.split(".").pop();
    };
  }
});

// node_modules/tldjs/lib/polyfills/array-some.js
var require_array_some = __commonJS({
  "node_modules/tldjs/lib/polyfills/array-some.js"(exports2, module2) {
    module2.exports = function _someFunction(value, fun) {
      "use strict";
      if (value === void 0 || value === null) {
        throw new TypeError();
      }
      var t = Object(value);
      var len = t.length >>> 0;
      if (typeof fun !== "function") {
        throw new TypeError();
      }
      var thisArg = arguments.length >= 3 ? arguments[2] : void 0;
      for (var i = 0; i < len; i++) {
        if (i in t && fun.call(thisArg, t[i], i, t)) {
          return true;
        }
      }
      return false;
    };
  }
});

// node_modules/tldjs/lib/canditate-rule.js
var require_canditate_rule = __commonJS({
  "node_modules/tldjs/lib/canditate-rule.js"(exports2, module2) {
    var some = require_array_some();
    module2.exports = function getCandidateRule(host, rules, options) {
      var rule = { "normal": null, "exception": null };
      options = options || { lazy: false };
      some(rules, function(r) {
        var pattern;
        if ("." + host === r.getNormalXld()) {
          if (options.lazy || r.exception || r.isHost) {
            rule.normal = r;
          }
          return true;
        }
        pattern = ".+" + r.getNormalPattern() + "$";
        if (new RegExp(pattern).test(host)) {
          rule[r.exception ? "exception" : "normal"] = r;
          return !r.exception;
        }
        return false;
      });
      if (rule.normal && rule.exception) {
        return rule.exception;
      }
      return rule.normal;
    };
  }
});

// node_modules/tldjs/lib/domain.js
var require_domain = __commonJS({
  "node_modules/tldjs/lib/domain.js"(exports2, module2) {
    var Rule = require_rule();
    var isValid = require_is_valid();
    var cleanHostValue = require_clean_host();
    var extractTldFromHost = require_from_host();
    var getCandidateRule = require_canditate_rule();
    var getRulesForTld = require_tld_rules();
    module2.exports = function getDomain(allRules, validHosts, host) {
      var domain = null, hostTld, rules, rule;
      var _validHosts = validHosts || [];
      if (isValid(_validHosts, host) === false) {
        return null;
      }
      host = cleanHostValue(host);
      hostTld = extractTldFromHost(host);
      rules = getRulesForTld(allRules, hostTld, new Rule({ "firstLevel": hostTld, "isHost": _validHosts.indexOf(hostTld) !== -1 }));
      rule = getCandidateRule(host, rules);
      if (rule === null) {
        return null;
      }
      host.replace(new RegExp(rule.getPattern()), function(m, d) {
        domain = d;
      });
      return domain;
    };
  }
});

// node_modules/tldjs/lib/subdomain.js
var require_subdomain = __commonJS({
  "node_modules/tldjs/lib/subdomain.js"(exports2, module2) {
    var cleanHostValue = require_clean_host();
    var getDomain = require_domain();
    var escapeRegExp = require_escape_regexp();
    module2.exports = function getSubdomain(allRules, validHosts, host) {
      var domain, r, subdomain;
      host = cleanHostValue(host);
      domain = getDomain(allRules, validHosts, host);
      if (domain === null) {
        return null;
      }
      r = "\\.?" + escapeRegExp(domain) + "$";
      subdomain = host.replace(new RegExp(r, "i"), "");
      return subdomain;
    };
  }
});

// node_modules/tldjs/lib/public-suffix.js
var require_public_suffix = __commonJS({
  "node_modules/tldjs/lib/public-suffix.js"(exports2, module2) {
    var cleanHostValue = require_clean_host();
    var extractTldFromHost = require_from_host();
    var getCandidateRule = require_canditate_rule();
    var getRulesForTld = require_tld_rules();
    module2.exports = function getPublicSuffix(allRules, host) {
      var hostTld, rules, rule;
      if (host in allRules) {
        return host;
      }
      host = cleanHostValue(host);
      hostTld = extractTldFromHost(host);
      rules = getRulesForTld(allRules, hostTld);
      rule = getCandidateRule(host, rules, { lazy: true });
      if (rule === null) {
        return null;
      }
      return rule.getNormalXld().slice(1);
    };
  }
});

// node_modules/tldjs/lib/tld-exists.js
var require_tld_exists = __commonJS({
  "node_modules/tldjs/lib/tld-exists.js"(exports2, module2) {
    var cleanHostValue = require_clean_host();
    var extractTldFromHost = require_from_host();
    module2.exports = function tldExists(rules, host) {
      var hostTld;
      host = cleanHostValue(host);
      if (rules[host]) {
        return true;
      }
      hostTld = extractTldFromHost(host);
      return rules[hostTld] !== void 0;
    };
  }
});

// node_modules/tldjs/index.js
var require_tldjs = __commonJS({
  "node_modules/tldjs/index.js"(exports2, module2) {
    "use strict";
    var allRules = require_rules();
    var cleanHostValue = require_clean_host();
    var escapeRegExp = require_escape_regexp();
    var getRulesForTld = require_tld_rules();
    var getDomain = require_domain();
    var getSubdomain = require_subdomain();
    var isValid = require_is_valid();
    var getPublicSuffix = require_public_suffix();
    var tldExists = require_tld_exists();
    function factory(options) {
      var rules = options.rules || allRules || {};
      var validHosts = options.validHosts || [];
      return {
        cleanHostValue,
        escapeRegExp,
        getRulesForTld,
        getDomain: function(host) {
          return getDomain(rules, validHosts, host);
        },
        getSubdomain: function(host) {
          return getSubdomain(rules, validHosts, host);
        },
        isValid: function(host) {
          return isValid(validHosts, host);
        },
        getPublicSuffix: function(host) {
          return getPublicSuffix(rules, host);
        },
        tldExists: function(tld) {
          return tldExists(rules, tld);
        },
        fromUserSettings: factory
      };
    }
    module2.exports = factory({ validHosts: [], rules: allRules });
  }
});

// node_modules/ipaddr.js/lib/ipaddr.js
var require_ipaddr = __commonJS({
  "node_modules/ipaddr.js/lib/ipaddr.js"(exports2, module2) {
    (function() {
      var expandIPv6, ipaddr, ipv4Part, ipv4Regexes, ipv6Part, ipv6Regexes, matchCIDR, root, zoneIndex;
      ipaddr = {};
      root = this;
      if (typeof module2 !== "undefined" && module2 !== null && module2.exports) {
        module2.exports = ipaddr;
      } else {
        root["ipaddr"] = ipaddr;
      }
      matchCIDR = function(first, second, partSize, cidrBits) {
        var part, shift;
        if (first.length !== second.length) {
          throw new Error("ipaddr: cannot match CIDR for objects with different lengths");
        }
        part = 0;
        while (cidrBits > 0) {
          shift = partSize - cidrBits;
          if (shift < 0) {
            shift = 0;
          }
          if (first[part] >> shift !== second[part] >> shift) {
            return false;
          }
          cidrBits -= partSize;
          part += 1;
        }
        return true;
      };
      ipaddr.subnetMatch = function(address, rangeList, defaultName) {
        var k, len, rangeName, rangeSubnets, subnet;
        if (defaultName == null) {
          defaultName = "unicast";
        }
        for (rangeName in rangeList) {
          rangeSubnets = rangeList[rangeName];
          if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) {
            rangeSubnets = [rangeSubnets];
          }
          for (k = 0, len = rangeSubnets.length; k < len; k++) {
            subnet = rangeSubnets[k];
            if (address.kind() === subnet[0].kind()) {
              if (address.match.apply(address, subnet)) {
                return rangeName;
              }
            }
          }
        }
        return defaultName;
      };
      ipaddr.IPv4 = function() {
        function IPv4(octets) {
          var k, len, octet;
          if (octets.length !== 4) {
            throw new Error("ipaddr: ipv4 octet count should be 4");
          }
          for (k = 0, len = octets.length; k < len; k++) {
            octet = octets[k];
            if (!(0 <= octet && octet <= 255)) {
              throw new Error("ipaddr: ipv4 octet should fit in 8 bits");
            }
          }
          this.octets = octets;
        }
        IPv4.prototype.kind = function() {
          return "ipv4";
        };
        IPv4.prototype.toString = function() {
          return this.octets.join(".");
        };
        IPv4.prototype.toNormalizedString = function() {
          return this.toString();
        };
        IPv4.prototype.toByteArray = function() {
          return this.octets.slice(0);
        };
        IPv4.prototype.match = function(other, cidrRange) {
          var ref;
          if (cidrRange === void 0) {
            ref = other, other = ref[0], cidrRange = ref[1];
          }
          if (other.kind() !== "ipv4") {
            throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
          }
          return matchCIDR(this.octets, other.octets, 8, cidrRange);
        };
        IPv4.prototype.SpecialRanges = {
          unspecified: [[new IPv4([0, 0, 0, 0]), 8]],
          broadcast: [[new IPv4([255, 255, 255, 255]), 32]],
          multicast: [[new IPv4([224, 0, 0, 0]), 4]],
          linkLocal: [[new IPv4([169, 254, 0, 0]), 16]],
          loopback: [[new IPv4([127, 0, 0, 0]), 8]],
          carrierGradeNat: [[new IPv4([100, 64, 0, 0]), 10]],
          "private": [[new IPv4([10, 0, 0, 0]), 8], [new IPv4([172, 16, 0, 0]), 12], [new IPv4([192, 168, 0, 0]), 16]],
          reserved: [[new IPv4([192, 0, 0, 0]), 24], [new IPv4([192, 0, 2, 0]), 24], [new IPv4([192, 88, 99, 0]), 24], [new IPv4([198, 51, 100, 0]), 24], [new IPv4([203, 0, 113, 0]), 24], [new IPv4([240, 0, 0, 0]), 4]]
        };
        IPv4.prototype.range = function() {
          return ipaddr.subnetMatch(this, this.SpecialRanges);
        };
        IPv4.prototype.toIPv4MappedAddress = function() {
          return ipaddr.IPv6.parse("::ffff:" + this.toString());
        };
        IPv4.prototype.prefixLengthFromSubnetMask = function() {
          var cidr, i, k, octet, stop, zeros, zerotable;
          zerotable = {
            0: 8,
            128: 7,
            192: 6,
            224: 5,
            240: 4,
            248: 3,
            252: 2,
            254: 1,
            255: 0
          };
          cidr = 0;
          stop = false;
          for (i = k = 3; k >= 0; i = k += -1) {
            octet = this.octets[i];
            if (octet in zerotable) {
              zeros = zerotable[octet];
              if (stop && zeros !== 0) {
                return null;
              }
              if (zeros !== 8) {
                stop = true;
              }
              cidr += zeros;
            } else {
              return null;
            }
          }
          return 32 - cidr;
        };
        return IPv4;
      }();
      ipv4Part = "(0?\\d+|0x[a-f0-9]+)";
      ipv4Regexes = {
        fourOctet: new RegExp("^" + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "$", "i"),
        longValue: new RegExp("^" + ipv4Part + "$", "i")
      };
      ipaddr.IPv4.parser = function(string) {
        var match, parseIntAuto, part, shift, value;
        parseIntAuto = function(string2) {
          if (string2[0] === "0" && string2[1] !== "x") {
            return parseInt(string2, 8);
          } else {
            return parseInt(string2);
          }
        };
        if (match = string.match(ipv4Regexes.fourOctet)) {
          return function() {
            var k, len, ref, results;
            ref = match.slice(1, 6);
            results = [];
            for (k = 0, len = ref.length; k < len; k++) {
              part = ref[k];
              results.push(parseIntAuto(part));
            }
            return results;
          }();
        } else if (match = string.match(ipv4Regexes.longValue)) {
          value = parseIntAuto(match[1]);
          if (value > 4294967295 || value < 0) {
            throw new Error("ipaddr: address outside defined range");
          }
          return function() {
            var k, results;
            results = [];
            for (shift = k = 0; k <= 24; shift = k += 8) {
              results.push(value >> shift & 255);
            }
            return results;
          }().reverse();
        } else {
          return null;
        }
      };
      ipaddr.IPv6 = function() {
        function IPv6(parts, zoneId) {
          var i, k, l, len, part, ref;
          if (parts.length === 16) {
            this.parts = [];
            for (i = k = 0; k <= 14; i = k += 2) {
              this.parts.push(parts[i] << 8 | parts[i + 1]);
            }
          } else if (parts.length === 8) {
            this.parts = parts;
          } else {
            throw new Error("ipaddr: ipv6 part count should be 8 or 16");
          }
          ref = this.parts;
          for (l = 0, len = ref.length; l < len; l++) {
            part = ref[l];
            if (!(0 <= part && part <= 65535)) {
              throw new Error("ipaddr: ipv6 part should fit in 16 bits");
            }
          }
          if (zoneId) {
            this.zoneId = zoneId;
          }
        }
        IPv6.prototype.kind = function() {
          return "ipv6";
        };
        IPv6.prototype.toString = function() {
          return this.toNormalizedString().replace(/((^|:)(0(:|$))+)/, "::");
        };
        IPv6.prototype.toRFC5952String = function() {
          var bestMatchIndex, bestMatchLength, match, regex, string;
          regex = /((^|:)(0(:|$)){2,})/g;
          string = this.toNormalizedString();
          bestMatchIndex = 0;
          bestMatchLength = -1;
          while (match = regex.exec(string)) {
            if (match[0].length > bestMatchLength) {
              bestMatchIndex = match.index;
              bestMatchLength = match[0].length;
            }
          }
          if (bestMatchLength < 0) {
            return string;
          }
          return string.substring(0, bestMatchIndex) + "::" + string.substring(bestMatchIndex + bestMatchLength);
        };
        IPv6.prototype.toByteArray = function() {
          var bytes, k, len, part, ref;
          bytes = [];
          ref = this.parts;
          for (k = 0, len = ref.length; k < len; k++) {
            part = ref[k];
            bytes.push(part >> 8);
            bytes.push(part & 255);
          }
          return bytes;
        };
        IPv6.prototype.toNormalizedString = function() {
          var addr, part, suffix;
          addr = function() {
            var k, len, ref, results;
            ref = this.parts;
            results = [];
            for (k = 0, len = ref.length; k < len; k++) {
              part = ref[k];
              results.push(part.toString(16));
            }
            return results;
          }.call(this).join(":");
          suffix = "";
          if (this.zoneId) {
            suffix = "%" + this.zoneId;
          }
          return addr + suffix;
        };
        IPv6.prototype.toFixedLengthString = function() {
          var addr, part, suffix;
          addr = function() {
            var k, len, ref, results;
            ref = this.parts;
            results = [];
            for (k = 0, len = ref.length; k < len; k++) {
              part = ref[k];
              results.push(part.toString(16).padStart(4, "0"));
            }
            return results;
          }.call(this).join(":");
          suffix = "";
          if (this.zoneId) {
            suffix = "%" + this.zoneId;
          }
          return addr + suffix;
        };
        IPv6.prototype.match = function(other, cidrRange) {
          var ref;
          if (cidrRange === void 0) {
            ref = other, other = ref[0], cidrRange = ref[1];
          }
          if (other.kind() !== "ipv6") {
            throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
          }
          return matchCIDR(this.parts, other.parts, 16, cidrRange);
        };
        IPv6.prototype.SpecialRanges = {
          unspecified: [new IPv6([0, 0, 0, 0, 0, 0, 0, 0]), 128],
          linkLocal: [new IPv6([65152, 0, 0, 0, 0, 0, 0, 0]), 10],
          multicast: [new IPv6([65280, 0, 0, 0, 0, 0, 0, 0]), 8],
          loopback: [new IPv6([0, 0, 0, 0, 0, 0, 0, 1]), 128],
          uniqueLocal: [new IPv6([64512, 0, 0, 0, 0, 0, 0, 0]), 7],
          ipv4Mapped: [new IPv6([0, 0, 0, 0, 0, 65535, 0, 0]), 96],
          rfc6145: [new IPv6([0, 0, 0, 0, 65535, 0, 0, 0]), 96],
          rfc6052: [new IPv6([100, 65435, 0, 0, 0, 0, 0, 0]), 96],
          "6to4": [new IPv6([8194, 0, 0, 0, 0, 0, 0, 0]), 16],
          teredo: [new IPv6([8193, 0, 0, 0, 0, 0, 0, 0]), 32],
          reserved: [[new IPv6([8193, 3512, 0, 0, 0, 0, 0, 0]), 32]]
        };
        IPv6.prototype.range = function() {
          return ipaddr.subnetMatch(this, this.SpecialRanges);
        };
        IPv6.prototype.isIPv4MappedAddress = function() {
          return this.range() === "ipv4Mapped";
        };
        IPv6.prototype.toIPv4Address = function() {
          var high, low, ref;
          if (!this.isIPv4MappedAddress()) {
            throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
          }
          ref = this.parts.slice(-2), high = ref[0], low = ref[1];
          return new ipaddr.IPv4([high >> 8, high & 255, low >> 8, low & 255]);
        };
        IPv6.prototype.prefixLengthFromSubnetMask = function() {
          var cidr, i, k, part, stop, zeros, zerotable;
          zerotable = {
            0: 16,
            32768: 15,
            49152: 14,
            57344: 13,
            61440: 12,
            63488: 11,
            64512: 10,
            65024: 9,
            65280: 8,
            65408: 7,
            65472: 6,
            65504: 5,
            65520: 4,
            65528: 3,
            65532: 2,
            65534: 1,
            65535: 0
          };
          cidr = 0;
          stop = false;
          for (i = k = 7; k >= 0; i = k += -1) {
            part = this.parts[i];
            if (part in zerotable) {
              zeros = zerotable[part];
              if (stop && zeros !== 0) {
                return null;
              }
              if (zeros !== 16) {
                stop = true;
              }
              cidr += zeros;
            } else {
              return null;
            }
          }
          return 128 - cidr;
        };
        return IPv6;
      }();
      ipv6Part = "(?:[0-9a-f]+::?)+";
      zoneIndex = "%[0-9a-z]{1,}";
      ipv6Regexes = {
        zoneIndex: new RegExp(zoneIndex, "i"),
        "native": new RegExp("^(::)?(" + ipv6Part + ")?([0-9a-f]+)?(::)?(" + zoneIndex + ")?$", "i"),
        transitional: new RegExp("^((?:" + ipv6Part + ")|(?:::)(?:" + ipv6Part + ")?)" + (ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part) + ("(" + zoneIndex + ")?$"), "i")
      };
      expandIPv6 = function(string, parts) {
        var colonCount, lastColon, part, replacement, replacementCount, zoneId;
        if (string.indexOf("::") !== string.lastIndexOf("::")) {
          return null;
        }
        zoneId = (string.match(ipv6Regexes["zoneIndex"]) || [])[0];
        if (zoneId) {
          zoneId = zoneId.substring(1);
          string = string.replace(/%.+$/, "");
        }
        colonCount = 0;
        lastColon = -1;
        while ((lastColon = string.indexOf(":", lastColon + 1)) >= 0) {
          colonCount++;
        }
        if (string.substr(0, 2) === "::") {
          colonCount--;
        }
        if (string.substr(-2, 2) === "::") {
          colonCount--;
        }
        if (colonCount > parts) {
          return null;
        }
        replacementCount = parts - colonCount;
        replacement = ":";
        while (replacementCount--) {
          replacement += "0:";
        }
        string = string.replace("::", replacement);
        if (string[0] === ":") {
          string = string.slice(1);
        }
        if (string[string.length - 1] === ":") {
          string = string.slice(0, -1);
        }
        parts = function() {
          var k, len, ref, results;
          ref = string.split(":");
          results = [];
          for (k = 0, len = ref.length; k < len; k++) {
            part = ref[k];
            results.push(parseInt(part, 16));
          }
          return results;
        }();
        return {
          parts,
          zoneId
        };
      };
      ipaddr.IPv6.parser = function(string) {
        var addr, k, len, match, octet, octets, zoneId;
        if (ipv6Regexes["native"].test(string)) {
          return expandIPv6(string, 8);
        } else if (match = string.match(ipv6Regexes["transitional"])) {
          zoneId = match[6] || "";
          addr = expandIPv6(match[1].slice(0, -1) + zoneId, 6);
          if (addr.parts) {
            octets = [parseInt(match[2]), parseInt(match[3]), parseInt(match[4]), parseInt(match[5])];
            for (k = 0, len = octets.length; k < len; k++) {
              octet = octets[k];
              if (!(0 <= octet && octet <= 255)) {
                return null;
              }
            }
            addr.parts.push(octets[0] << 8 | octets[1]);
            addr.parts.push(octets[2] << 8 | octets[3]);
            return {
              parts: addr.parts,
              zoneId: addr.zoneId
            };
          }
        }
        return null;
      };
      ipaddr.IPv4.isIPv4 = ipaddr.IPv6.isIPv6 = function(string) {
        return this.parser(string) !== null;
      };
      ipaddr.IPv4.isValid = function(string) {
        var e;
        try {
          new this(this.parser(string));
          return true;
        } catch (error1) {
          e = error1;
          return false;
        }
      };
      ipaddr.IPv4.isValidFourPartDecimal = function(string) {
        if (ipaddr.IPv4.isValid(string) && string.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) {
          return true;
        } else {
          return false;
        }
      };
      ipaddr.IPv6.isValid = function(string) {
        var addr, e;
        if (typeof string === "string" && string.indexOf(":") === -1) {
          return false;
        }
        try {
          addr = this.parser(string);
          new this(addr.parts, addr.zoneId);
          return true;
        } catch (error1) {
          e = error1;
          return false;
        }
      };
      ipaddr.IPv4.parse = function(string) {
        var parts;
        parts = this.parser(string);
        if (parts === null) {
          throw new Error("ipaddr: string is not formatted like ip address");
        }
        return new this(parts);
      };
      ipaddr.IPv6.parse = function(string) {
        var addr;
        addr = this.parser(string);
        if (addr.parts === null) {
          throw new Error("ipaddr: string is not formatted like ip address");
        }
        return new this(addr.parts, addr.zoneId);
      };
      ipaddr.IPv4.parseCIDR = function(string) {
        var maskLength, match, parsed;
        if (match = string.match(/^(.+)\/(\d+)$/)) {
          maskLength = parseInt(match[2]);
          if (maskLength >= 0 && maskLength <= 32) {
            parsed = [this.parse(match[1]), maskLength];
            Object.defineProperty(parsed, "toString", {
              value: function() {
                return this.join("/");
              }
            });
            return parsed;
          }
        }
        throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range");
      };
      ipaddr.IPv4.subnetMaskFromPrefixLength = function(prefix) {
        var filledOctetCount, j, octets;
        prefix = parseInt(prefix);
        if (prefix < 0 || prefix > 32) {
          throw new Error("ipaddr: invalid IPv4 prefix length");
        }
        octets = [0, 0, 0, 0];
        j = 0;
        filledOctetCount = Math.floor(prefix / 8);
        while (j < filledOctetCount) {
          octets[j] = 255;
          j++;
        }
        if (filledOctetCount < 4) {
          octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
        }
        return new this(octets);
      };
      ipaddr.IPv4.broadcastAddressFromCIDR = function(string) {
        var cidr, error, i, ipInterfaceOctets, octets, subnetMaskOctets;
        try {
          cidr = this.parseCIDR(string);
          ipInterfaceOctets = cidr[0].toByteArray();
          subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
          octets = [];
          i = 0;
          while (i < 4) {
            octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
            i++;
          }
          return new this(octets);
        } catch (error1) {
          error = error1;
          throw new Error("ipaddr: the address does not have IPv4 CIDR format");
        }
      };
      ipaddr.IPv4.networkAddressFromCIDR = function(string) {
        var cidr, error, i, ipInterfaceOctets, octets, subnetMaskOctets;
        try {
          cidr = this.parseCIDR(string);
          ipInterfaceOctets = cidr[0].toByteArray();
          subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
          octets = [];
          i = 0;
          while (i < 4) {
            octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
            i++;
          }
          return new this(octets);
        } catch (error1) {
          error = error1;
          throw new Error("ipaddr: the address does not have IPv4 CIDR format");
        }
      };
      ipaddr.IPv6.parseCIDR = function(string) {
        var maskLength, match, parsed;
        if (match = string.match(/^(.+)\/(\d+)$/)) {
          maskLength = parseInt(match[2]);
          if (maskLength >= 0 && maskLength <= 128) {
            parsed = [this.parse(match[1]), maskLength];
            Object.defineProperty(parsed, "toString", {
              value: function() {
                return this.join("/");
              }
            });
            return parsed;
          }
        }
        throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range");
      };
      ipaddr.isValid = function(string) {
        return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
      };
      ipaddr.parse = function(string) {
        if (ipaddr.IPv6.isValid(string)) {
          return ipaddr.IPv6.parse(string);
        } else if (ipaddr.IPv4.isValid(string)) {
          return ipaddr.IPv4.parse(string);
        } else {
          throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
        }
      };
      ipaddr.parseCIDR = function(string) {
        var e;
        try {
          return ipaddr.IPv6.parseCIDR(string);
        } catch (error1) {
          e = error1;
          try {
            return ipaddr.IPv4.parseCIDR(string);
          } catch (error12) {
            e = error12;
            throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format");
          }
        }
      };
      ipaddr.fromByteArray = function(bytes) {
        var length2;
        length2 = bytes.length;
        if (length2 === 4) {
          return new ipaddr.IPv4(bytes);
        } else if (length2 === 16) {
          return new ipaddr.IPv6(bytes);
        } else {
          throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
        }
      };
      ipaddr.process = function(string) {
        var addr;
        addr = this.parse(string);
        if (addr.kind() === "ipv6" && addr.isIPv4MappedAddress()) {
          return addr.toIPv4Address();
        } else {
          return addr;
        }
      };
    }).call(exports2);
  }
});

// node_modules/spf-parse/mechanisms.js
var require_mechanisms = __commonJS({
  "node_modules/spf-parse/mechanisms.js"(exports2, module2) {
    "use strict";
    var tld = require_tldjs();
    var ipaddr = require_ipaddr();
    var MechanismError = require_mechanismerror();
    function domainPrefixCheck(name, pattern, term) {
      let parts = term.match(pattern);
      let value = parts[1];
      if (!value) {
        return null;
      }
      if (value === ":" || value === "/") {
        throw new MechanismError(`Blank argument for the '${name}' mechanism`, "error");
      }
      if (/^:/.test(value)) {
        value = value.replace(/^:/, "");
        if (!tld.isValid(value)) {
          throw new MechanismError(`Invalid domain for the '${name}' mechanism: '${value}'`, "error");
        }
      }
      return value;
    }
    function domainCheckNullable(name, pattern, term) {
      return domainCheck(name, pattern, term, true);
    }
    function domainCheck(name, pattern, term, nullable) {
      let value = term.match(pattern)[1];
      if (!nullable && !value) {
        throw new MechanismError(`Missing mandatory argument for the '${name}' mechanism`, "error");
      }
      if (value === ":" || value === "=") {
        throw new MechanismError(`Blank argument for the '${name}' mechanism`, "error");
      }
      if (/^(:|\=)/.test(value)) {
        value = value.replace(/^(:|\=)/, "");
        if (!tld.isValid(value)) {
          throw new MechanismError(`Invalid domain for the '${name}' mechanism: '${value}'`, "error");
        }
      }
      return value;
    }
    module2.exports = {
      version: {
        description: "The SPF record version",
        pattern: /^v=(.+)$/i,
        validate(r) {
          let version = r.match(this.pattern)[1];
          return version;
        }
      },
      all: {
        description: "Always matches. It goes at the end of your record",
        pattern: /^all$/i
      },
      ip4: {
        // ip4:<ip4-address>
        // ip4:<ip4-network>/<prefix-length>
        description: "Match if IP is in the given range",
        pattern: /^ip4:(([\d\.]*)(\/\d+)?)$/i,
        validate(r) {
          let parts = r.match(this.pattern);
          let value = parts[1];
          let ip = parts[2];
          let cidr = parts[3];
          if (!value) {
            throw new MechanismError(`Missing or blank mandatory network specification for the 'ip4' mechanism.`, "error");
          }
          if (!ipaddr.isValid(ip)) {
            throw new MechanismError(`Invalid IP address: '${ip}'`, "error");
          }
          if (cidr) {
            try {
              ipaddr.parseCIDR(value);
            } catch (err) {
              throw new MechanismError(`Invalid CIDR format: '${value}'`, "error");
            }
          }
          return value;
        }
      },
      ip6: {
        // ip6:<ip6-address>
        // ip6:<ip6-network>/<prefix-length>
        description: "Match if IPv6 is in the given range",
        pattern: /^ip6:((.*?)(\/\d+)?)$/i,
        validate(r) {
          let parts = r.match(this.pattern);
          let value = parts[1];
          let ip = parts[2];
          let cidr = parts[3];
          if (!value) {
            throw new MechanismError(`Missing or blank mandatory network specification for the 'ip6' mechanism.`, "error");
          }
          if (!ipaddr.isValid(ip)) {
            throw new MechanismError(`Invalid IPv6 address: '${ip}'`, "error");
          }
          if (cidr) {
            try {
              ipaddr.parseCIDR(value);
            } catch (err) {
              throw new MechanismError(`Invalid CIDR format: '${value}'`, "error");
            }
          }
          return value;
        }
      },
      a: {
        // a
        // a/<prefix-length>
        // a:<domain>
        // a:<domain>/<prefix-length>
        description: "Match if IP has a DNS 'A' record in given domain",
        pattern: /a((:.*?)?(\/\d*)?)?$/i,
        validate(r) {
          return domainPrefixCheck("a", this.pattern, r);
        }
      },
      mx: {
        // mx
        // mx/<prefix-length>
        // mx:<domain>
        // mx:<domain>/<prefix-length>
        description: "",
        pattern: /mx((:.*?)?(\/\d*)?)?$/i,
        validate(r) {
          return domainPrefixCheck("mx", this.pattern, r);
        }
      },
      ptr: {
        // ptr
        // ptr:<domain>
        description: "Match if IP has a DNS 'PTR' record within given domain",
        pattern: /^ptr(:.*?)?$/i,
        validate(r) {
          return domainCheckNullable("ptr", this.pattern, r);
        }
      },
      exists: {
        pattern: /^exists(:.*?)?$/i,
        validate(r) {
          return domainCheck("exists", this.pattern, r);
        }
      },
      include: {
        description: "The specified domain is searched for an 'allow'",
        pattern: /^include(:.*?)?$/i,
        validate(r) {
          return domainCheck("include", this.pattern, r);
        }
      },
      redirect: {
        description: "The SPF record for the value replaces the current record",
        pattern: /redirect(\=.*?)?$/i,
        validate(r) {
          return domainCheck("redirect", this.pattern, r);
        }
      },
      exp: {
        description: "Explanation message to send with rejection",
        pattern: /exp(\=.*?)?$/i,
        validate(r) {
          return domainCheck("exp", this.pattern, r);
        }
      }
    };
  }
});

// node_modules/spf-parse/prefixes.js
var require_prefixes = __commonJS({
  "node_modules/spf-parse/prefixes.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      "+": "Pass",
      "-": "Fail",
      "~": "SoftFail",
      "?": "Neutral"
    };
  }
});

// node_modules/spf-parse/index.js
var require_spf_parse = __commonJS({
  "node_modules/spf-parse/index.js"(exports2, module2) {
    "use strict";
    var MechanismError = require_mechanismerror();
    var MECHANISMS = require_mechanisms();
    var PREFIXES = require_prefixes();
    var versionRegex = /^v=spf1/i;
    var mechanismRegex = /(\+|-|~|\?)?(.+)/i;
    function parseTerm(term, messages) {
      let parts = term.match(mechanismRegex);
      let record = {};
      if (parts !== null) {
        let prefix = parts[1];
        let mechanism = parts[2];
        if (prefix) {
          record.prefix = prefix;
          record.prefixdesc = PREFIXES[prefix];
        } else if (versionRegex.test(mechanism)) {
          record.prefix = "v";
        } else {
          record.prefix = "+";
          record.prefixdesc = PREFIXES["+"];
        }
        let found = false;
        for (let name in MECHANISMS) {
          if (Object.prototype.hasOwnProperty.call(MECHANISMS, name)) {
            const settings = MECHANISMS[name];
            if (settings.pattern.test(mechanism)) {
              found = true;
              record.type = name;
              record.description = settings.description;
              if (settings.validate) {
                try {
                  let value = settings.validate.call(settings, mechanism);
                  if (typeof value !== "undefined" && value !== null) {
                    record.value = value;
                  }
                } catch (err) {
                  if (err instanceof MechanismError) {
                    messages.push({
                      message: err.message,
                      type: err.type
                    });
                    break;
                  }
                }
              }
              break;
            }
          }
        }
        if (!found) {
          messages.push({
            message: `Unknown standalone term '${mechanism}'`,
            type: "error"
          });
        }
      }
      return record;
    }
    function parse(record) {
      record = record.trim();
      let records = {
        mechanisms: [],
        messages: [],
        // Valid flag will be changed at end of function
        valid: false
      };
      if (!versionRegex.test(record)) {
        records.messages.push({
          message: "No valid version found, record must start with 'v=spf1'",
          type: "error"
        });
        return records;
      }
      let terms = record.split(/\s+/);
      let duplicateMods = terms.filter((x) => new RegExp("=").test(x)).map((x) => x.match(/^(.*?)=/)[1]).filter((x, i, arr) => {
        return arr.includes(x, i + 1);
      });
      if (duplicateMods && duplicateMods.length > 0) {
        records.messages.push({
          type: "error",
          message: `Modifiers like "${duplicateMods[0]}" may appear only once in an SPF string`
        });
        return records;
      }
      let duplicateMechs = terms.map((x) => x.replace(/^(\+|-|~|\?)/, "")).filter((x, i, arr) => {
        return arr.includes(x, i + 1);
      });
      if (duplicateMechs && duplicateMechs.length > 0) {
        records.messages.push({
          type: "warning",
          message: "One or more duplicate mechanisms were found in the policy"
        });
      }
      for (let term of terms) {
        let mechanism = parseTerm(term, records.messages);
        if (mechanism) {
          records.mechanisms.push(mechanism);
        }
      }
      if (records.mechanisms.length > 0) {
        let redirectMech = records.mechanisms.find((x) => x.type === "redirect");
        let allMech = records.mechanisms.find((x) => x.type === "all");
        if (!allMech && !redirectMech) {
          records.messages.push({
            type: "warning",
            message: 'SPF strings should always either use an "all" mechanism or a "redirect" modifier to explicitly terminate processing.'
          });
        }
        let allIdx = records.mechanisms.findIndex((x) => x.type === "all");
        if (allIdx > -1) {
          if (allIdx < records.mechanisms.length - 1) {
            records.messages.push({
              type: "warning",
              message: 'One or more mechanisms were found after the "all" mechanism. These mechanisms will be ignored'
            });
          }
        }
        if (redirectMech && allMech) {
          records.messages.push({
            type: "warning",
            message: 'The "redirect" modifier will not be used, because the SPF string contains an "all" mechanism. A "redirect" modifier is only used after all mechanisms fail to match, but "all" will always match'
          });
        }
      }
      if (!Object.keys(records.messages).length > 0) {
        delete records.messages;
      }
      records.valid = true;
      return records;
    }
    parse.parseTerm = parseTerm;
    module2.exports = parse;
  }
});

// node_modules/ip-regex/index.js
var require_ip_regex = __commonJS({
  "node_modules/ip-regex/index.js"(exports2, module2) {
    "use strict";
    var word = "[a-fA-F\\d:]";
    var b = (options) => options && options.includeBoundaries ? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))` : "";
    var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
    var v6seg = "[a-fA-F\\d]{1,4}";
    var v6 = `
(?:
(?:${v6seg}:){7}(?:${v6seg}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6seg}:){5}(?::${v4}|(?::${v6seg}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6seg}:){4}(?:(?::${v6seg}){0,1}:${v4}|(?::${v6seg}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6seg}:){3}(?:(?::${v6seg}){0,2}:${v4}|(?::${v6seg}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6seg}:){2}(?:(?::${v6seg}){0,3}:${v4}|(?::${v6seg}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6seg}:){1}(?:(?::${v6seg}){0,4}:${v4}|(?::${v6seg}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
    var v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
    var v4exact = new RegExp(`^${v4}$`);
    var v6exact = new RegExp(`^${v6}$`);
    var ip = (options) => options && options.exact ? v46Exact : new RegExp(`(?:${b(options)}${v4}${b(options)})|(?:${b(options)}${v6}${b(options)})`, "g");
    ip.v4 = (options) => options && options.exact ? v4exact : new RegExp(`${b(options)}${v4}${b(options)}`, "g");
    ip.v6 = (options) => options && options.exact ? v6exact : new RegExp(`${b(options)}${v6}${b(options)}`, "g");
    module2.exports = ip;
  }
});

// node_modules/rambda/dist/rambda.js
var require_rambda = __commonJS({
  "node_modules/rambda/dist/rambda.js"(exports2) {
    "use strict";
    function F() {
      return false;
    }
    function T() {
      return true;
    }
    function add(a, b) {
      if (arguments.length === 1) return (_b) => add(a, _b);
      return Number(a) + Number(b);
    }
    function _concat(set1, set2) {
      set1 = set1 || [];
      set2 = set2 || [];
      let idx;
      const len1 = set1.length;
      const len2 = set2.length;
      const result = [];
      idx = 0;
      while (idx < len1) {
        result[result.length] = set1[idx];
        idx += 1;
      }
      idx = 0;
      while (idx < len2) {
        result[result.length] = set2[idx];
        idx += 1;
      }
      return result;
    }
    function _arity(n, fn) {
      switch (n) {
        case 0:
          return function() {
            return fn.apply(this, arguments);
          };
        case 1:
          return function(_1) {
            return fn.apply(this, arguments);
          };
        case 2:
          return function(_1, _2) {
            return fn.apply(this, arguments);
          };
        case 3:
          return function(_1, _2, _3) {
            return fn.apply(this, arguments);
          };
        case 4:
          return function(_1, _2, _3, _4) {
            return fn.apply(this, arguments);
          };
        case 5:
          return function(_1, _2, _3, _4, _5) {
            return fn.apply(this, arguments);
          };
        case 6:
          return function(_1, _2, _3, _4, _5, _6) {
            return fn.apply(this, arguments);
          };
        case 7:
          return function(_1, _2, _3, _4, _5, _6, _7) {
            return fn.apply(this, arguments);
          };
        case 8:
          return function(_1, _2, _3, _4, _5, _6, _7, _8) {
            return fn.apply(this, arguments);
          };
        case 9:
          return function(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
            return fn.apply(this, arguments);
          };
        default:
          return function(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
            return fn.apply(this, arguments);
          };
      }
    }
    function _curryN(n, cache, fn) {
      return function() {
        let ci = 0;
        let ai = 0;
        const cl = cache.length;
        const al = arguments.length;
        const args = new Array(cl + al);
        while (ci < cl) {
          args[ci] = cache[ci];
          ci++;
        }
        while (ai < al) {
          args[cl + ai] = arguments[ai];
          ai++;
        }
        const remaining = n - args.length;
        return args.length >= n ? fn.apply(this, args) : _arity(remaining, _curryN(n, args, fn));
      };
    }
    function curryN(n, fn) {
      if (arguments.length === 1) return (_fn) => curryN(n, _fn);
      if (n > 10) {
        throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
      }
      return _arity(n, _curryN(n, [], fn));
    }
    function addIndex(originalFunction, initialIndexFn = () => 0, loopIndexChange = (x) => x + 1) {
      return curryN(originalFunction.length, function() {
        const origFn = arguments[0];
        const list = arguments[arguments.length - 1];
        let idx = initialIndexFn(list.length);
        const args = Array.prototype.slice.call(arguments, 0);
        args[0] = function() {
          const result = origFn.apply(this, _concat(arguments, [idx, list]));
          idx = loopIndexChange(idx);
          return result;
        };
        return originalFunction.apply(this, args);
      });
    }
    function addIndexRight(originalFunction) {
      return addIndex(originalFunction, (listLength) => listLength - 1, (x) => x - 1);
    }
    var cloneList = (list) => Array.prototype.slice.call(list);
    function curry2(fn, args = []) {
      return (..._args) => ((rest) => rest.length >= fn.length ? fn(...rest) : curry2(fn, rest))([...args, ..._args]);
    }
    function adjustFn(index, replaceFn2, list) {
      const actualIndex = index < 0 ? list.length + index : index;
      if (index >= list.length || actualIndex < 0) return list;
      const clone2 = cloneList(list);
      clone2[actualIndex] = replaceFn2(clone2[actualIndex]);
      return clone2;
    }
    var adjust = curry2(adjustFn);
    function all(predicate, list) {
      if (arguments.length === 1) return (_list) => all(predicate, _list);
      for (let i = 0; i < list.length; i++) {
        if (!predicate(list[i])) return false;
      }
      return true;
    }
    function allPass(predicates) {
      return (...input) => {
        let counter = 0;
        while (counter < predicates.length) {
          if (!predicates[counter](...input)) {
            return false;
          }
          counter++;
        }
        return true;
      };
    }
    function always(x) {
      return (_) => x;
    }
    function and(a, b) {
      if (arguments.length === 1) return (_b) => and(a, _b);
      return a && b;
    }
    function any(predicate, list) {
      if (arguments.length === 1) return (_list) => any(predicate, _list);
      let counter = 0;
      while (counter < list.length) {
        if (predicate(list[counter], counter)) {
          return true;
        }
        counter++;
      }
      return false;
    }
    function anyPass(predicates) {
      return (...input) => {
        let counter = 0;
        while (counter < predicates.length) {
          if (predicates[counter](...input)) {
            return true;
          }
          counter++;
        }
        return false;
      };
    }
    function ap(functions, input) {
      if (arguments.length === 1) {
        return (_inputs) => ap(functions, _inputs);
      }
      return functions.reduce((acc, fn) => [...acc, ...input.map(fn)], []);
    }
    function aperture(step, list) {
      if (arguments.length === 1) {
        return (_list) => aperture(step, _list);
      }
      if (step > list.length) return [];
      let idx = 0;
      const limit = list.length - (step - 1);
      const acc = new Array(limit);
      while (idx < limit) {
        acc[idx] = list.slice(idx, idx + step);
        idx += 1;
      }
      return acc;
    }
    function append(x, input) {
      if (arguments.length === 1) return (_input) => append(x, _input);
      if (typeof input === "string") return input.split("").concat(x);
      const clone2 = cloneList(input);
      clone2.push(x);
      return clone2;
    }
    function apply(fn, args) {
      if (arguments.length === 1) {
        return (_args) => apply(fn, _args);
      }
      return fn.apply(this, args);
    }
    var {
      isArray
    } = Array;
    function __findHighestArity(spec, max2 = 0) {
      for (const key in spec) {
        if (spec.hasOwnProperty(key) === false || key === "constructor") continue;
        if (typeof spec[key] === "object") {
          max2 = Math.max(max2, __findHighestArity(spec[key]));
        }
        if (typeof spec[key] === "function") {
          max2 = Math.max(max2, spec[key].length);
        }
      }
      return max2;
    }
    function __filterUndefined() {
      const defined = [];
      let i = 0;
      const l = arguments.length;
      while (i < l) {
        if (typeof arguments[i] === "undefined") break;
        defined[i] = arguments[i];
        i++;
      }
      return defined;
    }
    function __applySpecWithArity(spec, arity, cache) {
      const remaining = arity - cache.length;
      if (remaining === 1) return (x) => __applySpecWithArity(spec, arity, __filterUndefined(...cache, x));
      if (remaining === 2) return (x, y) => __applySpecWithArity(spec, arity, __filterUndefined(...cache, x, y));
      if (remaining === 3) return (x, y, z) => __applySpecWithArity(spec, arity, __filterUndefined(...cache, x, y, z));
      if (remaining === 4) return (x, y, z, a) => __applySpecWithArity(spec, arity, __filterUndefined(...cache, x, y, z, a));
      if (remaining > 4) return (...args) => __applySpecWithArity(spec, arity, __filterUndefined(...cache, ...args));
      if (isArray(spec)) {
        const ret2 = [];
        let i = 0;
        const l = spec.length;
        for (; i < l; i++) {
          if (typeof spec[i] === "object" || isArray(spec[i])) {
            ret2[i] = __applySpecWithArity(spec[i], arity, cache);
          }
          if (typeof spec[i] === "function") {
            ret2[i] = spec[i](...cache);
          }
        }
        return ret2;
      }
      const ret = {};
      for (const key in spec) {
        if (spec.hasOwnProperty(key) === false || key === "constructor") continue;
        if (typeof spec[key] === "object") {
          ret[key] = __applySpecWithArity(spec[key], arity, cache);
          continue;
        }
        if (typeof spec[key] === "function") {
          ret[key] = spec[key](...cache);
        }
      }
      return ret;
    }
    function applySpec(spec, ...args) {
      const arity = __findHighestArity(spec);
      if (arity === 0) {
        return () => ({});
      }
      const toReturn = __applySpecWithArity(spec, arity, args);
      return toReturn;
    }
    function applyTo(input, fn) {
      if (arguments.length === 1) {
        return (_fn) => applyTo(input, _fn);
      }
      return fn(input);
    }
    function createCompareFunction(a, b, winner, loser) {
      if (a === b) return 0;
      return a < b ? winner : loser;
    }
    function ascend(getFunction, a, b) {
      if (arguments.length === 1) {
        return (_a, _b) => ascend(getFunction, _a, _b);
      }
      const aValue = getFunction(a);
      const bValue = getFunction(b);
      return createCompareFunction(aValue, bValue, -1, 1);
    }
    function assocFn(prop3, newValue, obj) {
      return Object.assign({}, obj, {
        [prop3]: newValue
      });
    }
    var assoc = curry2(assocFn);
    function _isInteger(n) {
      return n << 0 === n;
    }
    var isInteger = Number.isInteger || _isInteger;
    var isIndexInteger = (index) => Number.isInteger(Number(index));
    function createPath(path3, delimiter = ".") {
      return typeof path3 === "string" ? path3.split(delimiter).map((x) => isInteger(x) ? Number(x) : x) : path3;
    }
    function assocPathFn(path3, newValue, input) {
      const pathArrValue = createPath(path3);
      if (pathArrValue.length === 0) return newValue;
      const index = pathArrValue[0];
      if (pathArrValue.length > 1) {
        const condition = typeof input !== "object" || input === null || !input.hasOwnProperty(index);
        const nextInput = condition ? isIndexInteger(pathArrValue[1]) ? [] : {} : input[index];
        newValue = assocPathFn(Array.prototype.slice.call(pathArrValue, 1), newValue, nextInput);
      }
      if (isIndexInteger(index) && isArray(input)) {
        const arr = cloneList(input);
        arr[index] = newValue;
        return arr;
      }
      return assocFn(index, newValue, input);
    }
    var assocPath = curry2(assocPathFn);
    function binary(fn) {
      if (fn.length <= 2) return fn;
      return (a, b) => fn(a, b);
    }
    function bind(fn, thisObj) {
      if (arguments.length === 1) {
        return (_thisObj) => bind(fn, _thisObj);
      }
      return curryN(fn.length, (...args) => fn.apply(thisObj, args));
    }
    function both(f, g) {
      if (arguments.length === 1) return (_g) => both(f, _g);
      return (...input) => f(...input) && g(...input);
    }
    var call = (fn, ...inputs) => fn(...inputs);
    function chain(fn, list) {
      if (arguments.length === 1) {
        return (_list) => chain(fn, _list);
      }
      return [].concat(...list.map(fn));
    }
    function clampFn(min2, max2, input) {
      if (min2 > max2) {
        throw new Error("min must not be greater than max in clamp(min, max, value)");
      }
      if (input >= min2 && input <= max2) return input;
      if (input > max2) return max2;
      if (input < min2) return min2;
    }
    var clamp = curry2(clampFn);
    function clone(input) {
      const out = isArray(input) ? Array(input.length) : {};
      if (input && input.getTime) return new Date(input.getTime());
      for (const key in input) {
        const v = input[key];
        out[key] = typeof v === "object" && v !== null ? v.getTime ? new Date(v.getTime()) : clone(v) : v;
      }
      return out;
    }
    var ReduceStopper = class {
      constructor(value) {
        this.value = value;
      }
    };
    function reduceFn(reducer, acc, list) {
      if (list == null) {
        return acc;
      }
      if (!isArray(list)) {
        throw new TypeError("reduce: list must be array or iterable");
      }
      let index = 0;
      const len = list.length;
      while (index < len) {
        acc = reducer(acc, list[index], index, list);
        if (acc instanceof ReduceStopper) {
          return acc.value;
        }
        index++;
      }
      return acc;
    }
    var reduce = curry2(reduceFn);
    var reduceStopper = (value) => new ReduceStopper(value);
    function collectBy(fn, list) {
      if (arguments.length === 1) {
        return (_list) => collectBy(fn, _list);
      }
      const group = reduce((o, x) => {
        const tag = fn(x);
        if (o[tag] === void 0) {
          o[tag] = [];
        }
        o[tag].push(x);
        return o;
      }, {}, list);
      const newList = [];
      for (const tag in group) {
        newList.push(group[tag]);
      }
      return newList;
    }
    function comparator(fn) {
      return function(a, b) {
        return fn(a, b) ? -1 : fn(b, a) ? 1 : 0;
      };
    }
    function complement(fn) {
      return (...input) => !fn(...input);
    }
    function _pipe(f, g) {
      return function() {
        return g.call(this, f.apply(this, arguments));
      };
    }
    function pipe() {
      if (arguments.length === 0) {
        throw new Error("pipe requires at least one argument");
      }
      return _arity(arguments[0].length, reduceFn(_pipe, arguments[0], Array.prototype.slice.call(arguments, 1, Infinity)));
    }
    function compose2() {
      if (arguments.length === 0) {
        throw new Error("compose requires at least one argument");
      }
      return pipe.apply(this, Array.prototype.slice.call(arguments, 0).reverse());
    }
    function head(listOrString) {
      if (typeof listOrString === "string") return listOrString[0] || "";
      return listOrString[0];
    }
    function identity(x) {
      return x;
    }
    function reverse(listOrString) {
      if (typeof listOrString === "string") {
        return listOrString.split("").reverse().join("");
      }
      const clone2 = listOrString.slice();
      return clone2.reverse();
    }
    function drop(howManyToDrop, listOrString) {
      if (arguments.length === 1) return (_list) => drop(howManyToDrop, _list);
      return listOrString.slice(howManyToDrop > 0 ? howManyToDrop : 0);
    }
    function tail(listOrString) {
      return drop(1, listOrString);
    }
    function pipeWith(xf, list) {
      if (list.length <= 0) {
        return identity;
      }
      const headList = head(list);
      const tailList = tail(list);
      return _arity(headList.length, function() {
        return reduce(function(result, f) {
          return xf.call(this, f, result);
        }, headList.apply(this, arguments), tailList);
      });
    }
    function composeWith(xf, list) {
      if (arguments.length === 1) return (_list) => composeWith(xf, _list);
      return pipeWith.apply(this, [xf, reverse(list)]);
    }
    function concat(x, y) {
      if (arguments.length === 1) return (_y) => concat(x, _y);
      return typeof x === "string" ? `${x}${y}` : [...x, ...y];
    }
    function cond(conditions) {
      return (...input) => {
        let done = false;
        let toReturn;
        conditions.forEach(([predicate, getResult]) => {
          if (!done && predicate(...input)) {
            done = true;
            toReturn = getResult(...input);
          }
        });
        return toReturn;
      };
    }
    var INCORRECT_ITERABLE_INPUT = "Incorrect iterable input";
    var {
      keys: keys$1
    } = Object;
    function mapArray(fn, list, isIndexed = false) {
      let index = 0;
      const willReturn = Array(list.length);
      while (index < list.length) {
        willReturn[index] = isIndexed ? fn(list[index], index) : fn(list[index]);
        index++;
      }
      return willReturn;
    }
    function mapObject(fn, obj) {
      if (arguments.length === 1) {
        return (_obj) => mapObject(fn, _obj);
      }
      let index = 0;
      const objKeys = keys$1(obj);
      const len = objKeys.length;
      const willReturn = {};
      while (index < len) {
        const key = objKeys[index];
        willReturn[key] = fn(obj[key], key, obj);
        index++;
      }
      return willReturn;
    }
    var mapObjIndexed = mapObject;
    function map(fn, iterable) {
      if (arguments.length === 1) return (_iterable) => map(fn, _iterable);
      if (!iterable) {
        throw new Error(INCORRECT_ITERABLE_INPUT);
      }
      if (isArray(iterable)) return mapArray(fn, iterable);
      return mapObject(fn, iterable);
    }
    function max(x, y) {
      if (arguments.length === 1) return (_y) => max(x, _y);
      return y > x ? y : x;
    }
    function converge(fn, transformers) {
      if (arguments.length === 1) return (_transformers) => converge(fn, _transformers);
      const highestArity = reduce((a, b) => max(a, b.length), 0, transformers);
      return curryN(highestArity, function() {
        return fn.apply(this, map((g) => g.apply(this, arguments), transformers));
      });
    }
    function count(predicate, list) {
      if (arguments.length === 1) {
        return (_list) => count(predicate, _list);
      }
      if (!isArray(list)) return 0;
      return list.filter((x) => predicate(x)).length;
    }
    function countBy(fn, list) {
      if (arguments.length === 1) {
        return (_list) => countBy(fn, _list);
      }
      const willReturn = {};
      list.forEach((item) => {
        const key = fn(item);
        if (!willReturn[key]) {
          willReturn[key] = 1;
        } else {
          willReturn[key]++;
        }
      });
      return willReturn;
    }
    var dec = (x) => x - 1;
    function isFalsy(input) {
      return input === void 0 || input === null || Number.isNaN(input) === true;
    }
    function defaultTo2(defaultArgument, input) {
      if (arguments.length === 1) {
        return (_input) => defaultTo2(defaultArgument, _input);
      }
      return isFalsy(input) ? defaultArgument : input;
    }
    function descend(getFunction, a, b) {
      if (arguments.length === 1) {
        return (_a, _b) => descend(getFunction, _a, _b);
      }
      const aValue = getFunction(a);
      const bValue = getFunction(b);
      return createCompareFunction(aValue, bValue, 1, -1);
    }
    function type(input) {
      if (input === null) {
        return "Null";
      } else if (input === void 0) {
        return "Undefined";
      } else if (Number.isNaN(input)) {
        return "NaN";
      }
      const typeResult = Object.prototype.toString.call(input).slice(8, -1);
      return typeResult === "AsyncFunction" ? "Promise" : typeResult;
    }
    function _lastIndexOf(valueToFind, list) {
      if (!isArray(list)) throw new Error(`Cannot read property 'indexOf' of ${list}`);
      const typeOfValue = type(valueToFind);
      if (!["Array", "NaN", "Object", "RegExp"].includes(typeOfValue)) return list.lastIndexOf(valueToFind);
      const {
        length: length3
      } = list;
      let index = length3;
      let foundIndex = -1;
      while (--index > -1 && foundIndex === -1) if (equals2(list[index], valueToFind)) foundIndex = index;
      return foundIndex;
    }
    function _indexOf(valueToFind, list) {
      if (!isArray(list)) throw new Error(`Cannot read property 'indexOf' of ${list}`);
      const typeOfValue = type(valueToFind);
      if (!["Array", "NaN", "Object", "RegExp"].includes(typeOfValue)) return list.indexOf(valueToFind);
      let index = -1;
      let foundIndex = -1;
      const {
        length: length3
      } = list;
      while (++index < length3 && foundIndex === -1) if (equals2(list[index], valueToFind)) foundIndex = index;
      return foundIndex;
    }
    function _arrayFromIterator(iter) {
      const list = [];
      let next;
      while (!(next = iter.next()).done) list.push(next.value);
      return list;
    }
    function _compareSets(a, b) {
      if (a.size !== b.size) return false;
      const aList = _arrayFromIterator(a.values());
      const bList = _arrayFromIterator(b.values());
      const filtered = aList.filter((aInstance) => _indexOf(aInstance, bList) === -1);
      return filtered.length === 0;
    }
    function compareErrors(a, b) {
      if (a.message !== b.message) return false;
      if (a.toString !== b.toString) return false;
      return a.toString() === b.toString();
    }
    function parseDate(maybeDate) {
      if (!maybeDate.toDateString) return [false];
      return [true, maybeDate.getTime()];
    }
    function parseRegex(maybeRegex) {
      if (maybeRegex.constructor !== RegExp) return [false];
      return [true, maybeRegex.toString()];
    }
    function equals2(a, b) {
      if (arguments.length === 1) return (_b) => equals2(a, _b);
      if (Object.is(a, b)) return true;
      const aType = type(a);
      if (aType !== type(b)) return false;
      if (aType === "Function") return a.name === void 0 ? false : a.name === b.name;
      if (["NaN", "Null", "Undefined"].includes(aType)) return true;
      if (["BigInt", "Number"].includes(aType)) {
        if (Object.is(-0, a) !== Object.is(-0, b)) return false;
        return a.toString() === b.toString();
      }
      if (["Boolean", "String"].includes(aType)) return a.toString() === b.toString();
      if (aType === "Array") {
        const aClone = Array.from(a);
        const bClone = Array.from(b);
        if (aClone.toString() !== bClone.toString()) return false;
        let loopArrayFlag = true;
        aClone.forEach((aCloneInstance, aCloneIndex) => {
          if (loopArrayFlag) {
            if (aCloneInstance !== bClone[aCloneIndex] && !equals2(aCloneInstance, bClone[aCloneIndex])) loopArrayFlag = false;
          }
        });
        return loopArrayFlag;
      }
      const aRegex = parseRegex(a);
      const bRegex = parseRegex(b);
      if (aRegex[0]) return bRegex[0] ? aRegex[1] === bRegex[1] : false;
      else if (bRegex[0]) return false;
      const aDate = parseDate(a);
      const bDate = parseDate(b);
      if (aDate[0]) return bDate[0] ? aDate[1] === bDate[1] : false;
      else if (bDate[0]) return false;
      if (a instanceof Error) {
        if (!(b instanceof Error)) return false;
        return compareErrors(a, b);
      }
      if (aType === "Set") return _compareSets(a, b);
      if (aType === "Object") {
        const aKeys = Object.keys(a);
        if (aKeys.length !== Object.keys(b).length) return false;
        let loopObjectFlag = true;
        aKeys.forEach((aKeyInstance) => {
          if (loopObjectFlag) {
            const aValue = a[aKeyInstance];
            const bValue = b[aKeyInstance];
            if (aValue !== bValue && !equals2(aValue, bValue)) loopObjectFlag = false;
          }
        });
        return loopObjectFlag;
      }
      return false;
    }
    function includes$1(valueToFind, iterable) {
      if (arguments.length === 1) return (_iterable) => includes$1(valueToFind, _iterable);
      if (typeof iterable === "string") {
        return iterable.includes(valueToFind);
      }
      if (!iterable) {
        throw new TypeError(`Cannot read property 'indexOf' of ${iterable}`);
      }
      if (!isArray(iterable)) return false;
      return _indexOf(valueToFind, iterable) > -1;
    }
    var _Set = class {
      constructor() {
        this.set = /* @__PURE__ */ new Set();
        this.items = {};
      }
      checkUniqueness(item) {
        const type$1 = type(item);
        if (["Null", "Undefined", "NaN"].includes(type$1)) {
          if (type$1 in this.items) {
            return false;
          }
          this.items[type$1] = true;
          return true;
        }
        if (!["Object", "Array"].includes(type$1)) {
          const prevSize = this.set.size;
          this.set.add(item);
          return this.set.size !== prevSize;
        }
        if (!(type$1 in this.items)) {
          this.items[type$1] = [item];
          return true;
        }
        if (_indexOf(item, this.items[type$1]) === -1) {
          this.items[type$1].push(item);
          return true;
        }
        return false;
      }
    };
    function uniq(list) {
      const set2 = new _Set();
      const willReturn = [];
      list.forEach((item) => {
        if (set2.checkUniqueness(item)) {
          willReturn.push(item);
        }
      });
      return willReturn;
    }
    function difference(a, b) {
      if (arguments.length === 1) return (_b) => difference(a, _b);
      return uniq(a).filter((aInstance) => !includes$1(aInstance, b));
    }
    function differenceWithFn(fn, a, b) {
      const willReturn = [];
      const [first, second] = a.length > b.length ? [a, b] : [b, a];
      first.forEach((item) => {
        const hasItem = second.some((secondItem) => fn(item, secondItem));
        if (!hasItem && _indexOf(item, willReturn) === -1) {
          willReturn.push(item);
        }
      });
      return willReturn;
    }
    var differenceWith = curry2(differenceWithFn);
    function dissoc(prop3, obj) {
      if (arguments.length === 1) return (_obj) => dissoc(prop3, _obj);
      if (obj === null || obj === void 0) return {};
      const willReturn = {};
      for (const p in obj) {
        willReturn[p] = obj[p];
      }
      delete willReturn[prop3];
      return willReturn;
    }
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
          return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread2(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
          _defineProperty(e, r2, t[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
      }
      return e;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function compare(a, b) {
      return String(a) === String(b);
    }
    function includes(a, list) {
      let index = -1;
      const {
        length: length3
      } = list;
      while (++index < length3) if (compare(list[index], a)) return true;
      return false;
    }
    function omit(propsToOmit, obj) {
      if (arguments.length === 1) return (_obj) => omit(propsToOmit, _obj);
      if (obj === null || obj === void 0) return void 0;
      const propsToOmitValue = createPath(propsToOmit, ",");
      const willReturn = {};
      for (const key in obj) if (!includes(key, propsToOmitValue)) willReturn[key] = obj[key];
      return willReturn;
    }
    function pathFn(pathInput, obj) {
      let willReturn = obj;
      let counter = 0;
      const pathArrValue = createPath(pathInput);
      while (counter < pathArrValue.length) {
        if (willReturn === null || willReturn === void 0) {
          return void 0;
        }
        if (willReturn[pathArrValue[counter]] === null) return void 0;
        willReturn = willReturn[pathArrValue[counter]];
        counter++;
      }
      return willReturn;
    }
    function path2(pathInput, obj) {
      if (arguments.length === 1) return (_obj) => path2(pathInput, _obj);
      if (obj === null || obj === void 0) {
        return void 0;
      }
      return pathFn(pathInput, obj);
    }
    function removeIndex(index, list) {
      if (arguments.length === 1) return (_list) => removeIndex(index, _list);
      if (index <= 0) return list.slice(1);
      if (index >= list.length - 1) return list.slice(0, list.length - 1);
      return [...list.slice(0, index), ...list.slice(index + 1)];
    }
    function updateFn(index, newValue, list) {
      const clone2 = cloneList(list);
      if (index === -1) return clone2.fill(newValue, index);
      return clone2.fill(newValue, index, index + 1);
    }
    var update = curry2(updateFn);
    function dissocPath(pathInput, input) {
      if (arguments.length === 1) return (_obj) => dissocPath(pathInput, _obj);
      const pathArrValue = createPath(pathInput);
      if (pathArrValue.length === 0) return input;
      const pathResult = path2(pathArrValue, input);
      if (pathResult === void 0) return input;
      const index = pathArrValue[0];
      const condition = typeof input !== "object" || input === null || !input.hasOwnProperty(index);
      if (pathArrValue.length > 1) {
        const nextInput = condition ? isIndexInteger(pathArrValue[1]) ? [] : {} : input[index];
        const nextPathInput = Array.prototype.slice.call(pathArrValue, 1);
        const intermediateResult = dissocPath(nextPathInput, nextInput, input);
        if (isArray(input)) return update(index, intermediateResult, input);
        return _objectSpread2(_objectSpread2({}, input), {}, {
          [index]: intermediateResult
        });
      }
      if (isArray(input)) return removeIndex(index, input);
      return omit([index], input);
    }
    function divide(a, b) {
      if (arguments.length === 1) return (_b) => divide(a, _b);
      return a / b;
    }
    function dropLast(howManyToDrop, listOrString) {
      if (arguments.length === 1) {
        return (_listOrString) => dropLast(howManyToDrop, _listOrString);
      }
      return howManyToDrop > 0 ? listOrString.slice(0, -howManyToDrop) : listOrString.slice();
    }
    function dropLastWhile(predicate, iterable) {
      if (arguments.length === 1) {
        return (_iterable) => dropLastWhile(predicate, _iterable);
      }
      if (iterable.length === 0) return iterable;
      const isArray$1 = isArray(iterable);
      if (typeof predicate !== "function") {
        throw new Error(`'predicate' is from wrong type ${typeof predicate}`);
      }
      if (!isArray$1 && typeof iterable !== "string") {
        throw new Error(`'iterable' is from wrong type ${typeof iterable}`);
      }
      const toReturn = [];
      let counter = iterable.length;
      while (counter) {
        const item = iterable[--counter];
        if (!predicate(item)) {
          toReturn.push(item);
          break;
        }
      }
      while (counter) {
        toReturn.push(iterable[--counter]);
      }
      return isArray$1 ? toReturn.reverse() : toReturn.reverse().join("");
    }
    function dropRepeats(list) {
      if (!isArray(list)) {
        throw new Error(`${list} is not a list`);
      }
      const toReturn = [];
      list.reduce((prev, current) => {
        if (!equals2(prev, current)) {
          toReturn.push(current);
        }
        return current;
      }, void 0);
      return toReturn;
    }
    function dropRepeatsBy(fn, list) {
      if (arguments.length === 1) return (_list) => dropRepeatsBy(fn, _list);
      let lastEvaluated = null;
      return list.slice().filter((item) => {
        if (lastEvaluated === null) {
          lastEvaluated = fn(item);
          return true;
        }
        const evaluatedResult = fn(item);
        if (equals2(lastEvaluated, evaluatedResult)) return false;
        lastEvaluated = evaluatedResult;
        return true;
      });
    }
    function dropRepeatsWith(predicate, list) {
      if (arguments.length === 1) {
        return (_iterable) => dropRepeatsWith(predicate, _iterable);
      }
      if (!isArray(list)) {
        throw new Error(`${list} is not a list`);
      }
      const toReturn = [];
      list.reduce((prev, current) => {
        if (prev === void 0) {
          toReturn.push(current);
          return current;
        }
        if (!predicate(prev, current)) {
          toReturn.push(current);
        }
        return current;
      }, void 0);
      return toReturn;
    }
    function dropWhile(predicate, iterable) {
      if (arguments.length === 1) {
        return (_iterable) => dropWhile(predicate, _iterable);
      }
      const isArray$1 = isArray(iterable);
      if (!isArray$1 && typeof iterable !== "string") {
        throw new Error("`iterable` is neither list nor a string");
      }
      const toReturn = [];
      let counter = 0;
      while (counter < iterable.length) {
        const item = iterable[counter++];
        if (!predicate(item)) {
          toReturn.push(item);
          break;
        }
      }
      while (counter < iterable.length) {
        toReturn.push(iterable[counter++]);
      }
      return isArray$1 ? toReturn : toReturn.join("");
    }
    function either2(firstPredicate, secondPredicate) {
      if (arguments.length === 1) {
        return (_secondPredicate) => either2(firstPredicate, _secondPredicate);
      }
      return (...input) => Boolean(firstPredicate(...input) || secondPredicate(...input));
    }
    function empty(list) {
      if (typeof list === "string") return "";
      if (Array.isArray(list)) {
        const {
          name
        } = list.constructor;
        if (name === "Uint8Array") return Uint8Array.from("");
        if (name === "Float32Array") return new Float32Array([]);
        return [];
      }
      if (type(list) === "Object") return {};
    }
    function endsWith(target, iterable) {
      if (arguments.length === 1) return (_iterable) => endsWith(target, _iterable);
      if (typeof iterable === "string") {
        return iterable.endsWith(target);
      }
      if (!isArray(target)) return false;
      const diff = iterable.length - target.length;
      let correct = true;
      const filtered = target.filter((x, index) => {
        if (!correct) return false;
        const result = equals2(x, iterable[index + diff]);
        if (!result) correct = false;
        return result;
      });
      return filtered.length === target.length;
    }
    function eqByFn(fn, a, b) {
      return equals2(fn(a), fn(b));
    }
    var eqBy = curry2(eqByFn);
    function propFn(searchProperty, obj) {
      if (!obj) return void 0;
      return obj[searchProperty];
    }
    function prop2(searchProperty, obj) {
      if (arguments.length === 1) return (_obj) => prop2(searchProperty, _obj);
      return propFn(searchProperty, obj);
    }
    function eqPropsFn(property, objA, objB) {
      return equals2(prop2(property, objA), prop2(property, objB));
    }
    var eqProps = curry2(eqPropsFn);
    function evolveArray(rules, list) {
      return mapArray((x, i) => {
        if (type(rules[i]) === "Function") {
          return rules[i](x);
        }
        return x;
      }, list, true);
    }
    function evolveObject(rules, iterable) {
      return mapObject((x, prop3) => {
        if (type(x) === "Object") {
          const typeRule = type(rules[prop3]);
          if (typeRule === "Function") {
            return rules[prop3](x);
          }
          if (typeRule === "Object") {
            return evolve(rules[prop3], x);
          }
          return x;
        }
        if (type(rules[prop3]) === "Function") {
          return rules[prop3](x);
        }
        return x;
      }, iterable);
    }
    function evolve(rules, iterable) {
      if (arguments.length === 1) {
        return (_iterable) => evolve(rules, _iterable);
      }
      const rulesType = type(rules);
      const iterableType = type(iterable);
      if (iterableType !== rulesType) {
        throw new Error("iterableType !== rulesType");
      }
      if (!["Object", "Array"].includes(rulesType)) {
        throw new Error(`'iterable' and 'rules' are from wrong type ${rulesType}`);
      }
      if (iterableType === "Object") {
        return evolveObject(rules, iterable);
      }
      return evolveArray(rules, iterable);
    }
    function filterObject(predicate, obj) {
      const willReturn = {};
      for (const prop3 in obj) {
        if (predicate(obj[prop3], prop3, obj)) {
          willReturn[prop3] = obj[prop3];
        }
      }
      return willReturn;
    }
    function filterArray(predicate, list, indexed = false) {
      let index = 0;
      const len = list.length;
      const willReturn = [];
      while (index < len) {
        const predicateResult = indexed ? predicate(list[index], index) : predicate(list[index]);
        if (predicateResult) {
          willReturn.push(list[index]);
        }
        index++;
      }
      return willReturn;
    }
    function filter(predicate, iterable) {
      if (arguments.length === 1) return (_iterable) => filter(predicate, _iterable);
      if (!iterable) {
        throw new Error("Incorrect iterable input");
      }
      if (isArray(iterable)) return filterArray(predicate, iterable, false);
      return filterObject(predicate, iterable);
    }
    function find(predicate, list) {
      if (arguments.length === 1) return (_list) => find(predicate, _list);
      let index = 0;
      const len = list.length;
      while (index < len) {
        const x = list[index];
        if (predicate(x)) {
          return x;
        }
        index++;
      }
    }
    function findIndex(predicate, list) {
      if (arguments.length === 1) return (_list) => findIndex(predicate, _list);
      const len = list.length;
      let index = -1;
      while (++index < len) {
        if (predicate(list[index])) {
          return index;
        }
      }
      return -1;
    }
    function findLast(predicate, list) {
      if (arguments.length === 1) return (_list) => findLast(predicate, _list);
      let index = list.length;
      while (--index >= 0) {
        if (predicate(list[index])) {
          return list[index];
        }
      }
      return void 0;
    }
    function findLastIndex(fn, list) {
      if (arguments.length === 1) return (_list) => findLastIndex(fn, _list);
      let index = list.length;
      while (--index >= 0) {
        if (fn(list[index])) {
          return index;
        }
      }
      return -1;
    }
    function flatten2(list, input) {
      const willReturn = input === void 0 ? [] : input;
      for (let i = 0; i < list.length; i++) {
        if (isArray(list[i])) {
          flatten2(list[i], willReturn);
        } else {
          willReturn.push(list[i]);
        }
      }
      return willReturn;
    }
    function flipFn(fn) {
      return (...input) => {
        if (input.length === 1) {
          return (holder) => fn(holder, input[0]);
        } else if (input.length === 2) {
          return fn(input[1], input[0]);
        } else if (input.length === 3) {
          return fn(input[1], input[0], input[2]);
        } else if (input.length === 4) {
          return fn(input[1], input[0], input[2], input[3]);
        }
        throw new Error("R.flip doesn't work with arity > 4");
      };
    }
    function flip(fn) {
      return flipFn(fn);
    }
    function forEachObjIndexedFn(fn, obj) {
      let index = 0;
      const listKeys = keys$1(obj);
      const len = listKeys.length;
      while (index < len) {
        const key = listKeys[index];
        fn(obj[key], key, obj);
        index++;
      }
      return obj;
    }
    function forEachObjIndexed(fn, list) {
      if (arguments.length === 1) return (_list) => forEachObjIndexed(fn, _list);
      if (list === void 0) return;
      return forEachObjIndexedFn(fn, list);
    }
    function forEach(fn, iterable) {
      if (arguments.length === 1) return (_list) => forEach(fn, _list);
      if (iterable === void 0) return;
      if (isArray(iterable)) {
        let index = 0;
        const len = iterable.length;
        while (index < len) {
          fn(iterable[index]);
          index++;
        }
      } else return forEachObjIndexedFn(fn, iterable);
      return iterable;
    }
    function fromPairs(listOfPairs) {
      const toReturn = {};
      listOfPairs.forEach(([prop3, value]) => toReturn[prop3] = value);
      return toReturn;
    }
    function groupBy(groupFn, list) {
      if (arguments.length === 1) return (_list) => groupBy(groupFn, _list);
      const result = {};
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const key = groupFn(item);
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(item);
      }
      return result;
    }
    function groupWith(compareFn, list) {
      if (!isArray(list)) throw new TypeError("list.reduce is not a function");
      const clone2 = cloneList(list);
      if (list.length === 1) return [clone2];
      const toReturn = [];
      let holder = [];
      clone2.reduce((prev, current, i) => {
        if (i === 0) return current;
        const okCompare = compareFn(prev, current);
        const holderIsEmpty = holder.length === 0;
        const lastCall = i === list.length - 1;
        if (okCompare) {
          if (holderIsEmpty) holder.push(prev);
          holder.push(current);
          if (lastCall) toReturn.push(holder);
          return current;
        }
        if (holderIsEmpty) {
          toReturn.push([prev]);
          if (lastCall) toReturn.push([current]);
          return current;
        }
        toReturn.push(holder);
        if (lastCall) toReturn.push([current]);
        holder = [];
        return current;
      }, void 0);
      return toReturn;
    }
    function gt(a, b) {
      if (arguments.length === 1) return (_b) => gt(a, _b);
      return a > b;
    }
    function gte(a, b) {
      if (arguments.length === 1) return (_b) => gte(a, _b);
      return a >= b;
    }
    function has(prop3, obj) {
      if (arguments.length === 1) return (_obj) => has(prop3, _obj);
      if (!obj) return false;
      return obj.hasOwnProperty(prop3);
    }
    function hasIn(searchProperty, obj) {
      if (arguments.length === 1) {
        return (_obj) => hasIn(searchProperty, _obj);
      }
      return propFn(searchProperty, obj) !== void 0;
    }
    function hasPath(pathInput, obj) {
      if (arguments.length === 1) {
        return (objHolder) => hasPath(pathInput, objHolder);
      }
      return path2(pathInput, obj) !== void 0;
    }
    function _objectIs(a, b) {
      if (a === b) {
        return a !== 0 || 1 / a === 1 / b;
      }
      return a !== a && b !== b;
    }
    var objectIs = Object.is || _objectIs;
    function identical(a, b) {
      if (arguments.length === 1) return (_b) => identical(a, _b);
      return objectIs(a, b);
    }
    function ifElseFn(condition, onTrue, onFalse) {
      return (...input) => {
        const conditionResult = typeof condition === "boolean" ? condition : condition(...input);
        if (conditionResult === true) {
          return onTrue(...input);
        }
        return onFalse(...input);
      };
    }
    var ifElse = curry2(ifElseFn);
    var inc = (x) => x + 1;
    function indexByPath(pathInput, list) {
      const toReturn = {};
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        toReturn[path2(pathInput, item)] = item;
      }
      return toReturn;
    }
    function indexBy(condition, list) {
      if (arguments.length === 1) {
        return (_list) => indexBy(condition, _list);
      }
      if (typeof condition === "string") {
        return indexByPath(condition, list);
      }
      const toReturn = {};
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        toReturn[condition(item)] = item;
      }
      return toReturn;
    }
    function indexOf(valueToFind, list) {
      if (arguments.length === 1) {
        return (_list) => _indexOf(valueToFind, _list);
      }
      return _indexOf(valueToFind, list);
    }
    function baseSlice(array, start, end) {
      let index = -1;
      let {
        length: length3
      } = array;
      end = end > length3 ? length3 : end;
      if (end < 0) {
        end += length3;
      }
      length3 = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      const result = Array(length3);
      while (++index < length3) {
        result[index] = array[index + start];
      }
      return result;
    }
    function init(listOrString) {
      if (typeof listOrString === "string") return listOrString.slice(0, -1);
      return listOrString.length ? baseSlice(listOrString, 0, -1) : [];
    }
    function _includesWith(pred, x, list) {
      let idx = 0;
      const len = list.length;
      while (idx < len) {
        if (pred(x, list[idx])) return true;
        idx += 1;
      }
      return false;
    }
    function _filter(fn, list) {
      let idx = 0;
      const len = list.length;
      const result = [];
      while (idx < len) {
        if (fn(list[idx])) result[result.length] = list[idx];
        idx += 1;
      }
      return result;
    }
    function innerJoinFn(pred, xs, ys) {
      return _filter((x) => _includesWith(pred, x, ys), xs);
    }
    var innerJoin = curry2(innerJoinFn);
    function insertFn(indexToInsert, valueToInsert, array) {
      return [...array.slice(0, indexToInsert), valueToInsert, ...array.slice(indexToInsert)];
    }
    var insert = curry2(insertFn);
    function insertAllFn(index, listToInsert, list) {
      return [...list.slice(0, index), ...listToInsert, ...list.slice(index)];
    }
    var insertAll = curry2(insertAllFn);
    function intersection(listA, listB) {
      if (arguments.length === 1) return (_list) => intersection(listA, _list);
      return filter((x) => includes$1(x, listA), listB);
    }
    function intersperse(separator, list) {
      if (arguments.length === 1) return (_list) => intersperse(separator, _list);
      let index = -1;
      const len = list.length;
      const willReturn = [];
      while (++index < len) {
        if (index === len - 1) {
          willReturn.push(list[index]);
        } else {
          willReturn.push(list[index], separator);
        }
      }
      return willReturn;
    }
    function is(targetPrototype, x) {
      if (arguments.length === 1) return (_x) => is(targetPrototype, _x);
      return x != null && x.constructor === targetPrototype || x instanceof targetPrototype;
    }
    function isEmpty2(input) {
      const inputType = type(input);
      if (["Undefined", "NaN", "Number", "Null"].includes(inputType)) return false;
      if (!input) return true;
      if (type(input.isEmpty) === "Function") {
        return input.isEmpty();
      } else if (input.isEmpty) {
        return !!input.isEmpty;
      }
      if (inputType === "Object") {
        return Object.keys(input).length === 0;
      }
      if (inputType === "Array") {
        return input.length === 0;
      }
      return false;
    }
    function isNil2(x) {
      return x === void 0 || x === null;
    }
    function isNotNil(input) {
      return input != null;
    }
    function join(glue, list) {
      if (arguments.length === 1) return (_list) => join(glue, _list);
      return list.join(glue);
    }
    function juxt(listOfFunctions) {
      return (...args) => listOfFunctions.map((fn) => fn(...args));
    }
    function keys(x) {
      return Object.keys(x);
    }
    function last(listOrString) {
      if (typeof listOrString === "string") {
        return listOrString[listOrString.length - 1] || "";
      }
      return listOrString[listOrString.length - 1];
    }
    function lastIndexOf(valueToFind, list) {
      if (arguments.length === 1) {
        return (_list) => _lastIndexOf(valueToFind, _list);
      }
      return _lastIndexOf(valueToFind, list);
    }
    function length2(x) {
      if (isArray(x)) return x.length;
      if (typeof x === "string") return x.length;
      return NaN;
    }
    function lens(getter, setter) {
      return function(functor) {
        return function(target) {
          return functor(getter(target)).map((focus) => setter(focus, target));
        };
      };
    }
    function nth(index, input) {
      if (arguments.length === 1) return (_input) => nth(index, _input);
      const idx = index < 0 ? input.length + index : index;
      return Object.prototype.toString.call(input) === "[object String]" ? input.charAt(idx) : input[idx];
    }
    function lensIndex(index) {
      return lens(nth(index), update(index));
    }
    function lensPath(key) {
      return lens(path2(key), assocPath(key));
    }
    function lensProp(key) {
      return lens(prop2(key), assoc(key));
    }
    function lt(a, b) {
      if (arguments.length === 1) return (_b) => lt(a, _b);
      return a < b;
    }
    function match(pattern, input) {
      if (arguments.length === 1) return (_input) => match(pattern, _input);
      const willReturn = input.match(pattern);
      return willReturn === null ? [] : willReturn;
    }
    function mathMod(x, y) {
      if (arguments.length === 1) return (_y) => mathMod(x, _y);
      if (!isInteger(x) || !isInteger(y) || y < 1) return NaN;
      return (x % y + y) % y;
    }
    function maxByFn(compareFn, x, y) {
      return compareFn(y) > compareFn(x) ? y : x;
    }
    var maxBy = curry2(maxByFn);
    function sum(list) {
      return list.reduce((prev, current) => prev + current, 0);
    }
    function mean(list) {
      return sum(list) / list.length;
    }
    function median(list) {
      const len = list.length;
      if (len === 0) return NaN;
      const width = 2 - len % 2;
      const idx = (len - width) / 2;
      return mean(Array.prototype.slice.call(list, 0).sort((a, b) => {
        if (a === b) return 0;
        return a < b ? -1 : 1;
      }).slice(idx, idx + width));
    }
    function mergeRight(target, newProps) {
      if (arguments.length === 1) return (_newProps) => mergeRight(target, _newProps);
      return Object.assign({}, target || {}, newProps || {});
    }
    function mergeAll(arr) {
      let willReturn = {};
      map((val) => {
        willReturn = mergeRight(willReturn, val);
      }, arr);
      return willReturn;
    }
    function mergeDeepRight(target, source) {
      if (arguments.length === 1) {
        return (sourceHolder) => mergeDeepRight(target, sourceHolder);
      }
      const willReturn = clone(target);
      Object.keys(source).forEach((key) => {
        if (type(source[key]) === "Object") {
          if (type(target[key]) === "Object") {
            willReturn[key] = mergeDeepRight(target[key], source[key]);
          } else {
            willReturn[key] = source[key];
          }
        } else {
          willReturn[key] = source[key];
        }
      });
      return willReturn;
    }
    function mergeDeepLeft(newProps, target) {
      return mergeDeepRight(target, newProps);
    }
    function mergeLeft(x, y) {
      if (arguments.length === 1) return (_y) => mergeLeft(x, _y);
      return mergeRight(y, x);
    }
    function mergeWithFn(mergeFn, aInput, bInput) {
      const a = aInput !== null && aInput !== void 0 ? aInput : {};
      const b = bInput !== null && bInput !== void 0 ? bInput : {};
      const willReturn = {};
      Object.keys(a).forEach((key) => {
        if (b[key] === void 0) willReturn[key] = a[key];
        else willReturn[key] = mergeFn(a[key], b[key]);
      });
      Object.keys(b).forEach((key) => {
        if (willReturn[key] !== void 0) return;
        if (a[key] === void 0) willReturn[key] = b[key];
        else willReturn[key] = mergeFn(a[key], b[key]);
      });
      return willReturn;
    }
    var mergeWith = curry2(mergeWithFn);
    function min(x, y) {
      if (arguments.length === 1) return (_y) => min(x, _y);
      return y < x ? y : x;
    }
    function minByFn(compareFn, x, y) {
      return compareFn(y) < compareFn(x) ? y : x;
    }
    var minBy = curry2(minByFn);
    function isIterable(input) {
      return Array.isArray(input) || type(input) === "Object";
    }
    function modifyFn(property, fn, iterable) {
      if (!isIterable(iterable)) return iterable;
      if (iterable[property] === void 0) return iterable;
      if (isArray(iterable)) {
        return updateFn(property, fn(iterable[property]), iterable);
      }
      return _objectSpread2(_objectSpread2({}, iterable), {}, {
        [property]: fn(iterable[property])
      });
    }
    var modify = curry2(modifyFn);
    function modifyPathFn(pathInput, fn, object) {
      const path$1 = createPath(pathInput);
      if (path$1.length === 1) {
        return _objectSpread2(_objectSpread2({}, object), {}, {
          [path$1[0]]: fn(object[path$1[0]])
        });
      }
      if (path2(path$1, object) === void 0) return object;
      const val = modifyPath(Array.prototype.slice.call(path$1, 1), fn, object[path$1[0]]);
      if (val === object[path$1[0]]) {
        return object;
      }
      return assoc(path$1[0], val, object);
    }
    var modifyPath = curry2(modifyPathFn);
    function modulo(x, y) {
      if (arguments.length === 1) return (_y) => modulo(x, _y);
      return x % y;
    }
    function moveFn(fromIndex, toIndex, list) {
      if (fromIndex < 0 || toIndex < 0) {
        throw new Error("Rambda.move does not support negative indexes");
      }
      if (fromIndex > list.length - 1 || toIndex > list.length - 1) return list;
      const clone2 = cloneList(list);
      clone2[fromIndex] = list[toIndex];
      clone2[toIndex] = list[fromIndex];
      return clone2;
    }
    var move = curry2(moveFn);
    function multiply(x, y) {
      if (arguments.length === 1) return (_y) => multiply(x, _y);
      return x * y;
    }
    function negate(x) {
      return -x;
    }
    function none(predicate, list) {
      if (arguments.length === 1) return (_list) => none(predicate, _list);
      for (let i = 0; i < list.length; i++) {
        if (predicate(list[i])) return false;
      }
      return true;
    }
    function not(input) {
      return !input;
    }
    function objOf(key, value) {
      if (arguments.length === 1) {
        return (_value) => objOf(key, _value);
      }
      return {
        [key]: value
      };
    }
    function of(value) {
      return [value];
    }
    function on(binaryFn, unaryFn, a, b) {
      if (arguments.length === 3) {
        return (_b) => on(binaryFn, unaryFn, a, _b);
      }
      if (arguments.length === 2) {
        return (_a, _b) => on(binaryFn, unaryFn, _a, _b);
      }
      return binaryFn(unaryFn(a), unaryFn(b));
    }
    function onceFn(fn, context) {
      let result;
      return function() {
        if (fn) {
          result = fn.apply(context || this, arguments);
          fn = null;
        }
        return result;
      };
    }
    function once(fn, context) {
      if (arguments.length === 1) {
        const wrap = onceFn(fn, context);
        return curry2(wrap);
      }
      return onceFn(fn, context);
    }
    function or2(a, b) {
      if (arguments.length === 1) return (_b) => or2(a, _b);
      return a || b;
    }
    var Identity = (x) => ({
      x,
      map: (fn) => Identity(fn(x))
    });
    function overFn(lens2, fn, object) {
      return lens2((x) => Identity(fn(x)))(object).x;
    }
    var over = curry2(overFn);
    function partial(fn, ...args) {
      const len = fn.length;
      const argList = args.length === 1 && isArray(args[0]) ? args[0] : args;
      return (...rest) => {
        if (argList.length + rest.length >= len) {
          return fn(...argList, ...rest);
        }
        return partial(fn, ...[...argList, ...rest]);
      };
    }
    function partialObject(fn, input) {
      return (nextInput) => fn(mergeDeepRight(nextInput, input));
    }
    function partitionObject(predicate, iterable) {
      const yes = {};
      const no = {};
      Object.entries(iterable).forEach(([prop3, value]) => {
        if (predicate(value, prop3)) {
          yes[prop3] = value;
        } else {
          no[prop3] = value;
        }
      });
      return [yes, no];
    }
    function partitionArray(predicate, list, indexed = false) {
      const yes = [];
      const no = [];
      let counter = -1;
      while (counter++ < list.length - 1) {
        if (indexed ? predicate(list[counter], counter) : predicate(list[counter])) {
          yes.push(list[counter]);
        } else {
          no.push(list[counter]);
        }
      }
      return [yes, no];
    }
    function partition(predicate, iterable) {
      if (arguments.length === 1) {
        return (listHolder) => partition(predicate, listHolder);
      }
      if (!isArray(iterable)) return partitionObject(predicate, iterable);
      return partitionArray(predicate, iterable);
    }
    function pathEqFn(pathToSearch, target, input) {
      return equals2(path2(pathToSearch, input), target);
    }
    var pathEq = curry2(pathEqFn);
    function pathOrFn(defaultValue, pathInput, obj) {
      return defaultTo2(defaultValue, path2(pathInput, obj));
    }
    var pathOr2 = curry2(pathOrFn);
    function pathSatisfiesFn(fn, pathInput, obj) {
      if (pathInput.length === 0) throw new Error("R.pathSatisfies received an empty path");
      return Boolean(fn(path2(pathInput, obj)));
    }
    var pathSatisfies = curry2(pathSatisfiesFn);
    function paths(pathsToSearch, obj) {
      if (arguments.length === 1) {
        return (_obj) => paths(pathsToSearch, _obj);
      }
      return pathsToSearch.map((singlePath) => path2(singlePath, obj));
    }
    function pick(propsToPick, input) {
      if (arguments.length === 1) return (_input) => pick(propsToPick, _input);
      if (input === null || input === void 0) {
        return void 0;
      }
      const keys2 = createPath(propsToPick, ",");
      const willReturn = {};
      let counter = 0;
      while (counter < keys2.length) {
        if (keys2[counter] in input) {
          willReturn[keys2[counter]] = input[keys2[counter]];
        }
        counter++;
      }
      return willReturn;
    }
    function pickAll(propsToPick, obj) {
      if (arguments.length === 1) return (_obj) => pickAll(propsToPick, _obj);
      if (obj === null || obj === void 0) {
        return void 0;
      }
      const keysValue = createPath(propsToPick, ",");
      const willReturn = {};
      let counter = 0;
      while (counter < keysValue.length) {
        if (keysValue[counter] in obj) {
          willReturn[keysValue[counter]] = obj[keysValue[counter]];
        } else {
          willReturn[keysValue[counter]] = void 0;
        }
        counter++;
      }
      return willReturn;
    }
    function pickBy(predicate, obj) {
      if (arguments.length === 1) {
        return (_obj) => pickBy(predicate, _obj);
      }
      return Object.keys(obj).reduce((accum, key) => {
        if (predicate(obj[key], key, obj)) {
          accum[key] = obj[key];
        }
        return accum;
      }, {});
    }
    function pluck(property, list) {
      if (arguments.length === 1) return (_list) => pluck(property, _list);
      const willReturn = [];
      map((x) => {
        if (x[property] !== void 0) {
          willReturn.push(x[property]);
        }
      }, list);
      return willReturn;
    }
    function prepend(x, input) {
      if (arguments.length === 1) return (_input) => prepend(x, _input);
      if (typeof input === "string") return [x].concat(input.split(""));
      return [x].concat(input);
    }
    var product = reduce(multiply, 1);
    function propEqFn(valueToMatch, propToFind, obj) {
      if (!obj) return false;
      return equals2(valueToMatch, prop2(propToFind, obj));
    }
    var propEq2 = curry2(propEqFn);
    function propIsFn(targetPrototype, property, obj) {
      return is(targetPrototype, obj[property]);
    }
    var propIs = curry2(propIsFn);
    function propOrFn(defaultValue, property, obj) {
      if (!obj) return defaultValue;
      return defaultTo2(defaultValue, obj[property]);
    }
    var propOr2 = curry2(propOrFn);
    function propSatisfiesFn(predicate, property, obj) {
      return predicate(prop2(property, obj));
    }
    var propSatisfies = curry2(propSatisfiesFn);
    function props(propsToPick, obj) {
      if (arguments.length === 1) {
        return (_obj) => props(propsToPick, _obj);
      }
      if (!isArray(propsToPick)) {
        throw new Error("propsToPick is not a list");
      }
      return mapArray((prop3) => obj[prop3], propsToPick);
    }
    function range(start, end) {
      if (arguments.length === 1) return (_end) => range(start, _end);
      if (Number.isNaN(Number(start)) || Number.isNaN(Number(end))) {
        throw new TypeError("Both arguments to range must be numbers");
      }
      if (end < start) return [];
      const len = end - start;
      const willReturn = Array(len);
      for (let i = 0; i < len; i++) {
        willReturn[i] = start + i;
      }
      return willReturn;
    }
    function reduceByFunction(valueFn, valueAcc, keyFn, acc, elt) {
      const key = keyFn(elt);
      const value = valueFn(has(key, acc) ? acc[key] : clone(valueAcc), elt);
      acc[key] = value;
      return acc;
    }
    function reduceByFn(valueFn, valueAcc, keyFn, list) {
      return reduce((acc, elt) => reduceByFunction(valueFn, valueAcc, keyFn, acc, elt), {}, list);
    }
    var reduceBy = curry2(reduceByFn);
    function reject2(predicate, list) {
      if (arguments.length === 1) return (_list) => reject2(predicate, _list);
      return filter((x) => !predicate(x), list);
    }
    function repeat(x, timesToRepeat) {
      if (arguments.length === 1) {
        return (_timesToRepeat) => repeat(x, _timesToRepeat);
      }
      return Array(timesToRepeat).fill(x);
    }
    function replaceFn(pattern, replacer, str) {
      return str.replace(pattern, replacer);
    }
    var replace = curry2(replaceFn);
    function setFn(lens2, replacer, x) {
      return over(lens2, always(replacer), x);
    }
    var set = curry2(setFn);
    function sliceFn(from, to, list) {
      return list.slice(from, to);
    }
    var slice = curry2(sliceFn);
    function sort(sortFn, list) {
      if (arguments.length === 1) return (_list) => sort(sortFn, _list);
      return cloneList(list).sort(sortFn);
    }
    function sortBy(sortFn, list) {
      if (arguments.length === 1) return (_list) => sortBy(sortFn, _list);
      const clone2 = cloneList(list);
      return clone2.sort((a, b) => {
        const aSortResult = sortFn(a);
        const bSortResult = sortFn(b);
        if (aSortResult === bSortResult) return 0;
        return aSortResult < bSortResult ? -1 : 1;
      });
    }
    function sortHelper(a, b, listOfSortingFns) {
      let result = 0;
      let i = 0;
      while (result === 0 && i < listOfSortingFns.length) {
        result = listOfSortingFns[i](a, b);
        i += 1;
      }
      return result;
    }
    function sortWith(listOfSortingFns, list) {
      if (arguments.length === 1) return (_list) => sortWith(listOfSortingFns, _list);
      if (Array.isArray(list) === false) return [];
      const clone2 = list.slice();
      clone2.sort((a, b) => sortHelper(a, b, listOfSortingFns));
      return clone2;
    }
    function split(separator, str) {
      if (arguments.length === 1) return (_str) => split(separator, _str);
      return str.split(separator);
    }
    function maybe(ifRule, whenIf, whenElse) {
      const whenIfInput = ifRule && type(whenIf) === "Function" ? whenIf() : whenIf;
      const whenElseInput = !ifRule && type(whenElse) === "Function" ? whenElse() : whenElse;
      return ifRule ? whenIfInput : whenElseInput;
    }
    function take(howMany, listOrString) {
      if (arguments.length === 1) return (_listOrString) => take(howMany, _listOrString);
      if (howMany < 0) return listOrString.slice();
      if (typeof listOrString === "string") return listOrString.slice(0, howMany);
      return baseSlice(listOrString, 0, howMany);
    }
    function splitAt(index, input) {
      if (arguments.length === 1) {
        return (_list) => splitAt(index, _list);
      }
      if (!input) throw new TypeError(`Cannot read property 'slice' of ${input}`);
      if (!isArray(input) && typeof input !== "string") return [[], []];
      const correctIndex = maybe(index < 0, input.length + index < 0 ? 0 : input.length + index, index);
      return [take(correctIndex, input), drop(correctIndex, input)];
    }
    function splitEvery(sliceLength, listOrString) {
      if (arguments.length === 1) {
        return (_listOrString) => splitEvery(sliceLength, _listOrString);
      }
      if (sliceLength < 1) {
        throw new Error("First argument to splitEvery must be a positive integer");
      }
      const willReturn = [];
      let counter = 0;
      while (counter < listOrString.length) {
        willReturn.push(listOrString.slice(counter, counter += sliceLength));
      }
      return willReturn;
    }
    function splitWhen(predicate, input) {
      if (arguments.length === 1) {
        return (_input) => splitWhen(predicate, _input);
      }
      if (!input) throw new TypeError(`Cannot read property 'length' of ${input}`);
      const preFound = [];
      const postFound = [];
      let found = false;
      let counter = -1;
      while (counter++ < input.length - 1) {
        if (found) {
          postFound.push(input[counter]);
        } else if (predicate(input[counter])) {
          postFound.push(input[counter]);
          found = true;
        } else {
          preFound.push(input[counter]);
        }
      }
      return [preFound, postFound];
    }
    function startsWith(question, iterable) {
      if (arguments.length === 1) return (_iterable) => startsWith(question, _iterable);
      if (typeof iterable === "string") {
        return iterable.startsWith(question);
      }
      if (!isArray(question)) return false;
      let correct = true;
      const filtered = question.filter((x, index) => {
        if (!correct) return false;
        const result = equals2(x, iterable[index]);
        if (!result) correct = false;
        return result;
      });
      return filtered.length === question.length;
    }
    function subtract(a, b) {
      if (arguments.length === 1) return (_b) => subtract(a, _b);
      return a - b;
    }
    function swapArrayOrString(indexA, indexB, iterable) {
      const actualIndexA = indexA < 0 ? iterable.length + indexA : indexA;
      const actualIndexB = indexB < 0 ? iterable.length + indexB : indexB;
      if (actualIndexA === actualIndexB || Math.min(actualIndexA, actualIndexB) < 0 || Math.max(actualIndexA, actualIndexB) >= iterable.length) return iterable;
      if (typeof iterable === "string") {
        return iterable.slice(0, actualIndexA) + iterable[actualIndexB] + iterable.slice(actualIndexA + 1, actualIndexB) + iterable[actualIndexA] + iterable.slice(actualIndexB + 1);
      }
      const clone2 = iterable.slice();
      const temp = clone2[actualIndexA];
      clone2[actualIndexA] = clone2[actualIndexB];
      clone2[actualIndexB] = temp;
      return clone2;
    }
    function swapFn(indexA, indexB, iterable) {
      if (isArray(iterable) || typeof iterable === "string") return swapArrayOrString(indexA, indexB, iterable);
      const aVal = iterable[indexA];
      const bVal = iterable[indexB];
      if (aVal === void 0 || bVal === void 0) return iterable;
      return _objectSpread2(_objectSpread2({}, iterable), {}, {
        [indexA]: iterable[indexB],
        [indexB]: iterable[indexA]
      });
    }
    var swap = curry2(swapFn);
    function symmetricDifference(x, y) {
      if (arguments.length === 1) {
        return (_y) => symmetricDifference(x, _y);
      }
      return concat(filter((value) => !includes$1(value, y), x), filter((value) => !includes$1(value, x), y));
    }
    function takeLast(howMany, listOrString) {
      if (arguments.length === 1) return (_listOrString) => takeLast(howMany, _listOrString);
      const len = listOrString.length;
      if (howMany < 0) return listOrString.slice();
      let numValue = howMany > len ? len : howMany;
      if (typeof listOrString === "string") return listOrString.slice(len - numValue);
      numValue = len - numValue;
      return baseSlice(listOrString, numValue, len);
    }
    function takeLastWhile(predicate, input) {
      if (arguments.length === 1) {
        return (_input) => takeLastWhile(predicate, _input);
      }
      if (input.length === 0) return input;
      const toReturn = [];
      let counter = input.length;
      while (counter) {
        const item = input[--counter];
        if (!predicate(item)) {
          break;
        }
        toReturn.push(item);
      }
      return isArray(input) ? toReturn.reverse() : toReturn.reverse().join("");
    }
    function takeWhile(predicate, iterable) {
      if (arguments.length === 1) {
        return (_iterable) => takeWhile(predicate, _iterable);
      }
      const isArray$1 = isArray(iterable);
      if (!isArray$1 && typeof iterable !== "string") {
        throw new Error("`iterable` is neither list nor a string");
      }
      const toReturn = [];
      let counter = 0;
      while (counter < iterable.length) {
        const item = iterable[counter++];
        if (!predicate(item)) {
          break;
        }
        toReturn.push(item);
      }
      return isArray$1 ? toReturn : toReturn.join("");
    }
    function tap(fn, x) {
      if (arguments.length === 1) return (_x) => tap(fn, _x);
      fn(x);
      return x;
    }
    function test(pattern, str) {
      if (arguments.length === 1) return (_str) => test(pattern, _str);
      if (typeof pattern === "string") {
        throw new TypeError(`R.test requires a value of type RegExp as its first argument; received "${pattern}"`);
      }
      return str.search(pattern) !== -1;
    }
    function times(fn, howMany) {
      if (arguments.length === 1) return (_howMany) => times(fn, _howMany);
      if (!isInteger(howMany) || howMany < 0) {
        throw new RangeError("n must be an integer");
      }
      return map(fn, range(0, howMany));
    }
    function toLower(str) {
      return str.toLowerCase();
    }
    function toPairs(obj) {
      return Object.entries(obj);
    }
    function toString(x) {
      return x.toString();
    }
    function toUpper(str) {
      return str.toUpperCase();
    }
    function transpose(array) {
      return array.reduce((acc, el) => {
        el.forEach((nestedEl, i) => isArray(acc[i]) ? acc[i].push(nestedEl) : acc.push([nestedEl]));
        return acc;
      }, []);
    }
    function trim(str) {
      return str.trim();
    }
    var isFunction = (x) => ["Promise", "Function"].includes(type(x));
    function tryCatch(fn, fallback) {
      if (!isFunction(fn)) {
        throw new Error(`R.tryCatch | fn '${fn}'`);
      }
      const passFallback = isFunction(fallback);
      return (...inputs) => {
        try {
          return fn(...inputs);
        } catch (e) {
          return passFallback ? fallback(e, ...inputs) : fallback;
        }
      };
    }
    function unapply(fn) {
      return function(...args) {
        return fn.call(this, args);
      };
    }
    function union(x, y) {
      if (arguments.length === 1) return (_y) => union(x, _y);
      const toReturn = cloneList(x);
      y.forEach((yInstance) => {
        if (!includes$1(yInstance, x)) toReturn.push(yInstance);
      });
      return toReturn;
    }
    function uniqBy(fn, list) {
      if (arguments.length === 1) {
        return (_list) => uniqBy(fn, _list);
      }
      const set2 = new _Set();
      return list.filter((item) => set2.checkUniqueness(fn(item)));
    }
    function includesWith(predicate, target, list) {
      let willReturn = false;
      let index = -1;
      while (++index < list.length && !willReturn) {
        const value = list[index];
        if (predicate(target, value)) {
          willReturn = true;
        }
      }
      return willReturn;
    }
    function uniqWith(predicate, list) {
      if (arguments.length === 1) return (_list) => uniqWith(predicate, _list);
      let index = -1;
      const willReturn = [];
      while (++index < list.length) {
        const value = list[index];
        if (!includesWith(predicate, value, willReturn)) {
          willReturn.push(value);
        }
      }
      return willReturn;
    }
    function unlessFn(predicate, whenFalseFn, input) {
      if (predicate(input)) return input;
      return whenFalseFn(input);
    }
    var unless = curry2(unlessFn);
    function unnest(list) {
      return list.reduce((acc, item) => {
        if (Array.isArray(item)) {
          return [...acc, ...item];
        }
        return [...acc, item];
      }, []);
    }
    function unwind(property, obj) {
      if (arguments.length === 1) {
        return (_obj) => unwind(property, _obj);
      }
      if (!isArray(obj[property])) return [obj];
      return mapArray((x) => _objectSpread2(_objectSpread2({}, obj), {}, {
        [property]: x
      }), obj[property]);
    }
    function values(obj) {
      if (type(obj) !== "Object") return [];
      return Object.values(obj);
    }
    var Const = (x) => ({
      x,
      map: (fn) => Const(x)
    });
    function view(lens2, target) {
      if (arguments.length === 1) return (_target) => view(lens2, _target);
      return lens2(Const)(target).x;
    }
    function whenFn(predicate, whenTrueFn, input) {
      if (!predicate(input)) return input;
      return whenTrueFn(input);
    }
    var when = curry2(whenFn);
    function where(conditions, input) {
      if (input === void 0) {
        return (_input) => where(conditions, _input);
      }
      let flag = true;
      for (const prop3 in conditions) {
        if (!flag) continue;
        const result = conditions[prop3](input[prop3]);
        if (flag && result === false) {
          flag = false;
        }
      }
      return flag;
    }
    function whereAny(conditions, input) {
      if (input === void 0) {
        return (_input) => whereAny(conditions, _input);
      }
      for (const prop3 in conditions) {
        if (conditions[prop3](input[prop3])) {
          return true;
        }
      }
      return false;
    }
    function whereEq(condition, input) {
      if (arguments.length === 1) {
        return (_input) => whereEq(condition, _input);
      }
      const result = filter((conditionValue, conditionProp) => equals2(conditionValue, input[conditionProp]), condition);
      return Object.keys(result).length === Object.keys(condition).length;
    }
    function without(matchAgainst, source) {
      if (source === void 0) {
        return (_source) => without(matchAgainst, _source);
      }
      return reduce((prev, current) => _indexOf(current, matchAgainst) > -1 ? prev : prev.concat(current), [], source);
    }
    function xor(a, b) {
      if (arguments.length === 1) return (_b) => xor(a, _b);
      return Boolean(a) && !b || Boolean(b) && !a;
    }
    function zip(left, right) {
      if (arguments.length === 1) return (_right) => zip(left, _right);
      const result = [];
      const length3 = Math.min(left.length, right.length);
      for (let i = 0; i < length3; i++) {
        result[i] = [left[i], right[i]];
      }
      return result;
    }
    function zipObj(keys2, values2) {
      if (arguments.length === 1) return (yHolder) => zipObj(keys2, yHolder);
      return take(values2.length, keys2).reduce((prev, xInstance, i) => {
        prev[xInstance] = values2[i];
        return prev;
      }, {});
    }
    function zipWithFn(fn, x, y) {
      return take(x.length > y.length ? y.length : x.length, x).map((xInstance, i) => fn(xInstance, y[i]));
    }
    var zipWith = curry2(zipWithFn);
    exports2.F = F;
    exports2.T = T;
    exports2.__findHighestArity = __findHighestArity;
    exports2._indexOf = _indexOf;
    exports2._lastIndexOf = _lastIndexOf;
    exports2._pipe = _pipe;
    exports2.add = add;
    exports2.addIndex = addIndex;
    exports2.addIndexRight = addIndexRight;
    exports2.adjust = adjust;
    exports2.all = all;
    exports2.allPass = allPass;
    exports2.always = always;
    exports2.and = and;
    exports2.any = any;
    exports2.anyPass = anyPass;
    exports2.ap = ap;
    exports2.aperture = aperture;
    exports2.append = append;
    exports2.apply = apply;
    exports2.applySpec = applySpec;
    exports2.applyTo = applyTo;
    exports2.ascend = ascend;
    exports2.assoc = assoc;
    exports2.assocFn = assocFn;
    exports2.assocPath = assocPath;
    exports2.assocPathFn = assocPathFn;
    exports2.binary = binary;
    exports2.bind = bind;
    exports2.both = both;
    exports2.call = call;
    exports2.chain = chain;
    exports2.clamp = clamp;
    exports2.clone = clone;
    exports2.collectBy = collectBy;
    exports2.comparator = comparator;
    exports2.complement = complement;
    exports2.compose = compose2;
    exports2.composeWith = composeWith;
    exports2.concat = concat;
    exports2.cond = cond;
    exports2.converge = converge;
    exports2.count = count;
    exports2.countBy = countBy;
    exports2.createCompareFunction = createCompareFunction;
    exports2.curry = curry2;
    exports2.curryN = curryN;
    exports2.dec = dec;
    exports2.defaultTo = defaultTo2;
    exports2.descend = descend;
    exports2.difference = difference;
    exports2.differenceWith = differenceWith;
    exports2.differenceWithFn = differenceWithFn;
    exports2.dissoc = dissoc;
    exports2.dissocPath = dissocPath;
    exports2.divide = divide;
    exports2.drop = drop;
    exports2.dropLast = dropLast;
    exports2.dropLastWhile = dropLastWhile;
    exports2.dropRepeats = dropRepeats;
    exports2.dropRepeatsBy = dropRepeatsBy;
    exports2.dropRepeatsWith = dropRepeatsWith;
    exports2.dropWhile = dropWhile;
    exports2.either = either2;
    exports2.empty = empty;
    exports2.endsWith = endsWith;
    exports2.eqBy = eqBy;
    exports2.eqByFn = eqByFn;
    exports2.eqProps = eqProps;
    exports2.equals = equals2;
    exports2.evolve = evolve;
    exports2.evolveArray = evolveArray;
    exports2.evolveObject = evolveObject;
    exports2.filter = filter;
    exports2.filterArray = filterArray;
    exports2.filterObject = filterObject;
    exports2.find = find;
    exports2.findIndex = findIndex;
    exports2.findLast = findLast;
    exports2.findLastIndex = findLastIndex;
    exports2.flatten = flatten2;
    exports2.flip = flip;
    exports2.forEach = forEach;
    exports2.forEachObjIndexed = forEachObjIndexed;
    exports2.forEachObjIndexedFn = forEachObjIndexedFn;
    exports2.fromPairs = fromPairs;
    exports2.groupBy = groupBy;
    exports2.groupWith = groupWith;
    exports2.gt = gt;
    exports2.gte = gte;
    exports2.has = has;
    exports2.hasIn = hasIn;
    exports2.hasPath = hasPath;
    exports2.head = head;
    exports2.identical = identical;
    exports2.identity = identity;
    exports2.ifElse = ifElse;
    exports2.inc = inc;
    exports2.includes = includes$1;
    exports2.indexBy = indexBy;
    exports2.indexOf = indexOf;
    exports2.init = init;
    exports2.innerJoin = innerJoin;
    exports2.innerJoinFn = innerJoinFn;
    exports2.insert = insert;
    exports2.insertAll = insertAll;
    exports2.insertAllFn = insertAllFn;
    exports2.insertFn = insertFn;
    exports2.intersection = intersection;
    exports2.intersperse = intersperse;
    exports2.is = is;
    exports2.isEmpty = isEmpty2;
    exports2.isNil = isNil2;
    exports2.isNotNil = isNotNil;
    exports2.join = join;
    exports2.juxt = juxt;
    exports2.keys = keys;
    exports2.last = last;
    exports2.lastIndexOf = lastIndexOf;
    exports2.length = length2;
    exports2.lens = lens;
    exports2.lensIndex = lensIndex;
    exports2.lensPath = lensPath;
    exports2.lensProp = lensProp;
    exports2.lt = lt;
    exports2.map = map;
    exports2.mapArray = mapArray;
    exports2.mapObjIndexed = mapObjIndexed;
    exports2.mapObject = mapObject;
    exports2.match = match;
    exports2.mathMod = mathMod;
    exports2.max = max;
    exports2.maxBy = maxBy;
    exports2.maxByFn = maxByFn;
    exports2.mean = mean;
    exports2.median = median;
    exports2.merge = mergeRight;
    exports2.mergeAll = mergeAll;
    exports2.mergeDeepLeft = mergeDeepLeft;
    exports2.mergeDeepRight = mergeDeepRight;
    exports2.mergeLeft = mergeLeft;
    exports2.mergeRight = mergeRight;
    exports2.mergeWith = mergeWith;
    exports2.mergeWithFn = mergeWithFn;
    exports2.min = min;
    exports2.minBy = minBy;
    exports2.minByFn = minByFn;
    exports2.modify = modify;
    exports2.modifyPath = modifyPath;
    exports2.modifyPathFn = modifyPathFn;
    exports2.modulo = modulo;
    exports2.move = move;
    exports2.multiply = multiply;
    exports2.negate = negate;
    exports2.none = none;
    exports2.not = not;
    exports2.nth = nth;
    exports2.objOf = objOf;
    exports2.of = of;
    exports2.omit = omit;
    exports2.on = on;
    exports2.once = once;
    exports2.or = or2;
    exports2.over = over;
    exports2.partial = partial;
    exports2.partialObject = partialObject;
    exports2.partition = partition;
    exports2.partitionArray = partitionArray;
    exports2.partitionObject = partitionObject;
    exports2.path = path2;
    exports2.pathEq = pathEq;
    exports2.pathFn = pathFn;
    exports2.pathOr = pathOr2;
    exports2.pathSatisfies = pathSatisfies;
    exports2.pathSatisfiesFn = pathSatisfiesFn;
    exports2.paths = paths;
    exports2.pick = pick;
    exports2.pickAll = pickAll;
    exports2.pickBy = pickBy;
    exports2.pipe = pipe;
    exports2.pipeWith = pipeWith;
    exports2.pluck = pluck;
    exports2.prepend = prepend;
    exports2.product = product;
    exports2.prop = prop2;
    exports2.propEq = propEq2;
    exports2.propFn = propFn;
    exports2.propIs = propIs;
    exports2.propOr = propOr2;
    exports2.propSatisfies = propSatisfies;
    exports2.props = props;
    exports2.range = range;
    exports2.reduce = reduce;
    exports2.reduceBy = reduceBy;
    exports2.reduceByFn = reduceByFn;
    exports2.reduceFn = reduceFn;
    exports2.reduceStopper = reduceStopper;
    exports2.reject = reject2;
    exports2.removeIndex = removeIndex;
    exports2.repeat = repeat;
    exports2.replace = replace;
    exports2.reverse = reverse;
    exports2.set = set;
    exports2.slice = slice;
    exports2.sort = sort;
    exports2.sortBy = sortBy;
    exports2.sortWith = sortWith;
    exports2.split = split;
    exports2.splitAt = splitAt;
    exports2.splitEvery = splitEvery;
    exports2.splitWhen = splitWhen;
    exports2.startsWith = startsWith;
    exports2.subtract = subtract;
    exports2.sum = sum;
    exports2.swap = swap;
    exports2.symmetricDifference = symmetricDifference;
    exports2.tail = tail;
    exports2.take = take;
    exports2.takeLast = takeLast;
    exports2.takeLastWhile = takeLastWhile;
    exports2.takeWhile = takeWhile;
    exports2.tap = tap;
    exports2.test = test;
    exports2.times = times;
    exports2.toLower = toLower;
    exports2.toPairs = toPairs;
    exports2.toString = toString;
    exports2.toUpper = toUpper;
    exports2.transpose = transpose;
    exports2.trim = trim;
    exports2.tryCatch = tryCatch;
    exports2.type = type;
    exports2.unapply = unapply;
    exports2.union = union;
    exports2.uniq = uniq;
    exports2.uniqBy = uniqBy;
    exports2.uniqWith = uniqWith;
    exports2.unless = unless;
    exports2.unnest = unnest;
    exports2.unwind = unwind;
    exports2.update = update;
    exports2.updateFn = updateFn;
    exports2.values = values;
    exports2.view = view;
    exports2.when = when;
    exports2.where = where;
    exports2.whereAny = whereAny;
    exports2.whereEq = whereEq;
    exports2.without = without;
    exports2.xor = xor;
    exports2.zip = zip;
    exports2.zipObj = zipObj;
    exports2.zipWith = zipWith;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  InspecterError: () => Inspecter_default,
  SpfInspector: () => SpfInspector_default,
  SpfType: () => SpfType,
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/SpfInspector.ts
var dns = __toESM(require("dns"), 1);
var import_spf_parse = __toESM(require_spf_parse(), 1);

// src/Record.ts
var SpfType = /* @__PURE__ */ ((SpfType2) => {
  SpfType2["include"] = "include";
  SpfType2["version"] = "version";
  SpfType2["all"] = "all";
  SpfType2["mx"] = "mx";
  SpfType2["ip4"] = "ip4";
  SpfType2["ip6"] = "ip6";
  SpfType2["a"] = "a";
  return SpfType2;
})(SpfType || {});

// src/SpfInspector.ts
var import_ip_regex = __toESM(require_ip_regex(), 1);

// src/Inspecter.ts
var InspecterError = /* @__PURE__ */ ((InspecterError2) => {
  InspecterError2["UNKNWON"] = "EUNKNWON";
  InspecterError2["NOTFOUND"] = "ENOTFOUND";
  InspecterError2["IPS_NOT_MATCH"] = "IPSMATCH";
  InspecterError2["INC_NOT_MATCH"] = "INCMATCH";
  InspecterError2["DOM_NOT_MATCH"] = "DOMMATCH";
  return InspecterError2;
})(InspecterError || {});
var Inspecter_default = InspecterError;

// src/SpfInspector.ts
var import_rambda = __toESM(require_rambda(), 1);
var contains = (0, import_rambda.curry)((item, list) => list.includes(item));
var isRawIp = (domain) => (0, import_ip_regex.v4)().test(domain) || (0, import_ip_regex.v6)().test(domain);
var SpfInspector = (domain, search = {}, stopOnMatch = true) => {
  let status = {
    found: false,
    ips: [],
    includes: [],
    domains: [],
    match: false
  };
  const getDnsRecord = (domain2) => {
    if (isRawIp(domain2))
      return Promise.reject(new Error(`Domain ${domain2} is a raw ip !`));
    return new Promise((resolve, reject2) => {
      dns.resolveTxt(domain2, (err, entries) => {
        if (err) return reject2(err);
        resolve(
          entries.reduce((accumulator, currentValue) => [
            ...accumulator,
            ...currentValue
          ]).filter((record) => record.includes("v=spf1")).map(
            // * Transorm to data record
            (record) => ({
              record,
              detail: (0, import_spf_parse.default)(record || "")
            })
          )
        );
      });
    });
  };
  const updateState = (record) => {
    const mechanisms = (0, import_rambda.pathOr)([], ["detail", "mechanisms"], record);
    if ((0, import_rambda.length)(mechanisms) === 0) return;
    mechanisms.filter((0, import_rambda.or)((0, import_rambda.propEq)("type", "ip4" /* ip4 */), (0, import_rambda.propEq)("type", "ip6" /* ip6 */))).map((0, import_rambda.prop)("value")).forEach((ip) => {
      if (contains(ip, status.ips)) return;
      status.ips.push(ip);
    });
    mechanisms.filter((0, import_rambda.propEq)("type", "include" /* include */)).map((0, import_rambda.prop)("value")).forEach((include) => {
      if (contains(include, status.includes)) return;
      status.includes.push(include);
    });
    mechanisms.filter((0, import_rambda.propEq)("type", "a" /* a */)).map((0, import_rambda.prop)("value")).forEach((domain2) => {
      if (contains(domain2, status.domains)) return;
      status.domains.push(domain2);
    });
    status.match = [
      (0, import_rambda.equals)(status.includes, (0, import_rambda.propOr)([], "includes", search)),
      (0, import_rambda.equals)(status.ips, (0, import_rambda.propOr)([], "ips", search)),
      (0, import_rambda.equals)(status.domains, (0, import_rambda.propOr)([], "domains", search))
    ].every((0, import_rambda.equals)(true)) || status.match;
  };
  const getIncludes = async (record, depth) => {
    updateState(record);
    if (status.match && stopOnMatch) return Promise.resolve(record);
    if (depth < 0) return Promise.resolve(record);
    const includes = (0, import_rambda.pathOr)(
      [],
      ["detail", "mechanisms"],
      record
    ).filter((0, import_rambda.propEq)("type", "include" /* include */));
    if ((0, import_rambda.length)(includes) === 0) return Promise.resolve(record);
    const recordsFromIncludes = await Promise.all(
      includes.map((include) => include.value).map((include) => getDnsRecord(include))
      // * Get the record
    );
    record.includes = await Promise.all(
      (0, import_rambda.flatten)(recordsFromIncludes).map(
        (el) => new Promise(
          async (resolve) => resolve(await getIncludes(el, depth - 1))
        )
      )
    );
    return Promise.resolve(record);
  };
  return getDnsRecord(domain).then((records) => {
    return Promise.all(
      records.map((record) => {
        if ((0, import_rambda.path)(["detail", "valid"], record))
          return getIncludes(
            record,
            Math.max(0, (0, import_rambda.defaultTo)(10, search.maxDepth))
          );
        return Promise.resolve(record);
      })
    ).then((records2) => {
      const helperRemoveEmpty = (0, import_rambda.compose)(
        (0, import_rambda.reject)((0, import_rambda.either)(import_rambda.isNil, import_rambda.isEmpty)),
        (0, import_rambda.defaultTo)([])
      );
      return Promise.resolve({
        records: records2 || [],
        found: {
          ips: helperRemoveEmpty(status.ips),
          includes: helperRemoveEmpty(status.includes),
          domains: helperRemoveEmpty(status.domains)
        },
        isMatch: status.match,
        reason: ""
      });
    }).catch((err) => {
      return Promise.reject({
        records: [],
        found: {
          ips: [],
          includes: [],
          domains: []
        },
        isMatch: false,
        reason: "ENOTFOUND" /* NOTFOUND */
      });
    });
  });
};
var SpfInspector_default = SpfInspector;

// src/index.ts
var src_default = SpfInspector_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InspecterError,
  SpfInspector,
  SpfType
});
