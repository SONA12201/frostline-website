:root{--bg:#f3f8fa;--ink:#0b2a35;--deep:#0b3a4a;--ice:#9fe3f5;--amber:#f2a93b;--card:#fff;--line:#cfe2e8;--bad:#c0392b;--ok:#1d7a4f}
@media (prefers-color-scheme:dark){:root{--bg:#08212a;--ink:#e6f3f7;--card:#0e3140;--line:#1f4b5c}}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--ink);font:400 17px/1.6 "Source Sans 3",system-ui,sans-serif}
h1,h2,h3,.brand{font-family:Sora,system-ui,sans-serif}
a{color:#0a7ea4}
.nav{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;align-items:center;padding:10px 5vw;background:var(--deep)}
.nav a{color:#fff;text-decoration:none;margin-left:18px}
.nav .brand{display:flex;align-items:center;gap:10px;font-weight:700;margin:0}
section{max-width:980px;margin:0 auto;padding:56px 5vw}
.hero{padding-top:80px}
.hero h1{font-size:clamp(2rem,5vw,3.2rem);line-height:1.15;max-width:18em;margin:.4em 0}
.hero p{max-width:34em}
.btn{display:inline-block;background:var(--amber);color:#2a1a00;font-weight:600;border:0;padding:12px 20px;border-radius:8px;text-decoration:none;cursor:pointer;margin:6px 8px 6px 0;font-size:1rem}
.btn.ghost{background:transparent;color:var(--ink);border:2px solid var(--deep)}
.btn:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid var(--amber);outline-offset:2px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:32px}
@media(max-width:700px){.grid2{grid-template-columns:1fr}.nav a{margin-left:10px}}
.scroll{overflow-x:auto}
table{width:100%;border-collapse:collapse;background:var(--card)}
th,td{padding:12px;text-align:left;border-bottom:1px solid var(--line)}
th{background:var(--deep);color:#fff}
.row{display:flex;gap:10px;flex-wrap:wrap}
input,select,textarea{font:inherit;padding:10px;border:1px solid var(--line);border-radius:8px;background:var(--card);color:var(--ink);width:100%}
.row input{width:auto;flex:1;min-width:180px}
label{display:block;margin-bottom:12px}
.sr{position:absolute;left:-9999px}
.result{margin-top:16px;padding:16px;border-left:6px solid var(--deep);background:var(--card);display:none}
.result.show{display:block}
.result.warn{border-color:var(--bad)}
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px;margin:20px 0}
.kpi{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px}
.kpi b{display:block;font:700 1.7rem Sora,sans-serif}
.kpi.alert{border-color:var(--bad)}.kpi.alert b{color:var(--bad)}
.chart svg{width:100%;height:auto;background:var(--card);border:1px solid var(--line);border-radius:10px}
.chart text{fill:var(--ink);font:14px "Source Sans 3",sans-serif}
footer{text-align:center;padding:24px;background:var(--deep);color:#cfe9f1}
