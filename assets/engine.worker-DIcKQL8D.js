(function(){let e=null,t=null;async function n({base:t,v:n,pyodide:r}){let i=`https://cdn.jsdelivr.net/pyodide/v${r}/full/`;importScripts(i+`pyodide.js`);let a=await self.loadPyodide({indexURL:i}),o=await(await fetch(`${t}clauty/engine.zip?v=${n}`)).arrayBuffer();a.unpackArchive(o,`zip`,{extractDir:`/engine`}),a.runPython(`
import sys, json
sys.path.insert(0, '/engine')
from modules.runtime.connector import EngineConnector
_eng = EngineConnector.from_host('/engine', host_id='travellite', revision='phone')
def _compile(text, words):
    st, res = _eng.compile_text(text, list(words))
    return json.dumps({'status': st, 'result': res}, ensure_ascii=False, default=str)
`),e=a.globals.get(`_compile`)}self.onmessage=async r=>{let i=r.data;try{if(i.type===`init`){t||=n(i),await t,self.postMessage({type:`ready`});return}if(i.type===`compile`){await t;let n=JSON.parse(e(i.text,i.words));self.postMessage({type:`result`,id:i.id,...n})}}catch(e){self.postMessage({type:i.type===`init`?`fail`:`result`,id:i.id,status:`error`,error:String(e).slice(0,300)})}}})();