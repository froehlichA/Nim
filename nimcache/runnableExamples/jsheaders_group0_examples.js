/* Generated by the Nim Compiler v1.5.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI33555111 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555103 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555105 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI486539289 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI486539298 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33554456 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555886 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555066 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555148 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI33554440 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555147 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI33555095 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555096 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555107 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554439 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI33555107 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555107.node = NNI33555107;
var NNI33555096 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555096.node = NNI33555096;
NTI33555147.base = NTI33555095;
NTI33555148.base = NTI33555095;
var NNI33555095 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555147, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554440, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554439, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554439, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555148, name: "up", sons: null}]};
NTI33555095.node = NNI33555095;
var NNI33555066 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555066.node = NNI33555066;
NTI33555095.base = NTI33555066;
NTI33555096.base = NTI33555095;
NTI33555107.base = NTI33555096;
var NNI33555886 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554440, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554456, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554440, name: "Field2", sons: null}]};
NTI33555886.node = NNI33555886;
var NNI486539298 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "a", len: 0, typ: NTI486539289, name: "a", sons: null}, 
{kind: 1, offset: "b", len: 0, typ: NTI33554456, name: "b", sons: null}]};
NTI486539298.node = NNI486539298;
var NNI33555105 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555105.node = NNI33555105;
var NNI33555103 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555103.node = NNI33555103;
NTI33555103.base = NTI33555096;
NTI33555105.base = NTI33555103;
var NNI33555111 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555111.node = NNI33555111;
NTI33555111.base = NTI33555096;
function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);
function nimCopy(dest_33557130, src_33557131, ti_33557132) {
  var result_33557141 = null;

    switch (ti_33557132.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557121(ti_33557132))) {
      result_33557141 = src_33557131;
      }
      else {
        result_33557141 = [src_33557131[0], src_33557131[1]];
      }
      
      break;
    case 19:
            if (dest_33557130 === null || dest_33557130 === undefined) {
        dest_33557130 = {};
      }
      else {
        for (var key in dest_33557130) { delete dest_33557130[key]; }
      }
      for (var key in src_33557131) { dest_33557130[key] = src_33557131[key]; }
      result_33557141 = dest_33557130;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557132.base == null))) {
      result_33557141 = nimCopy(dest_33557130, src_33557131, ti_33557132.base);
      }
      else {
      if ((ti_33557132.kind == 17)) {
      result_33557141 = (dest_33557130 === null || dest_33557130 === undefined) ? {m_type: ti_33557132} : dest_33557130;
      }
      else {
        result_33557141 = (dest_33557130 === null || dest_33557130 === undefined) ? {} : dest_33557130;
      }
      }
      nimCopyAux(result_33557141, src_33557131, ti_33557132.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_33557131 === null) {
        result_33557141 = null;
      }
      else {
        if (dest_33557130 === null || dest_33557130 === undefined) {
          dest_33557130 = new Array(src_33557131.length);
        }
        else {
          dest_33557130.length = src_33557131.length;
        }
        result_33557141 = dest_33557130;
        for (var i = 0; i < src_33557131.length; ++i) {
          result_33557141[i] = nimCopy(result_33557141[i], src_33557131[i], ti_33557132.base);
        }
      }
    
      break;
    case 28:
            if (src_33557131 !== null) {
        result_33557141 = src_33557131.slice(0);
      }
    
      break;
    default: 
      result_33557141 = src_33557131;
      break;
    }

  return result_33557141;

}
function makeNimstrLit(c_33556788) {
      var result = [];
  for (var i = 0; i < c_33556788.length; ++i) {
    result[i] = c_33556788.charCodeAt(i);
  }
  return result;
  

  
}
function arrayConstr(len_33557169, value_33557170, typ_33557171) {
        var result = new Array(len_33557169);
    for (var i = 0; i < len_33557169; ++i) result[i] = nimCopy(null, value_33557170, typ_33557171);
    return result;
  

  
}
function cstrToNimstr(c_33556791) {
      var ln = c_33556791.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556791.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556791.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}
function toJSStr(s_33556794) {
                    var Tmp5;
            var Tmp7;

  var result_33556795 = null;

    var res_33556829 = newSeq_33556812((s_33556794).length);
    var i_33556830 = 0;
    var j_33556831 = 0;
    L1: do {
        L2: while (true) {
        if (!(i_33556830 < (s_33556794).length)) break L2;
          var c_33556832 = s_33556794[i_33556830];
          if ((c_33556832 < 128)) {
          res_33556829[j_33556831] = String.fromCharCode(c_33556832);
          i_33556830 += 1;
          }
          else {
            var helper_33556844 = newSeq_33556812(0);
            L3: do {
                L4: while (true) {
                if (!true) break L4;
                  var code_33556845 = c_33556832.toString(16);
                  if ((((code_33556845) == null ? 0 : (code_33556845).length) == 1)) {
                  helper_33556844.push("%0");;
                  }
                  else {
                  helper_33556844.push("%");;
                  }
                  
                  helper_33556844.push(code_33556845);;
                  i_33556830 += 1;
                    if (((s_33556794).length <= i_33556830)) Tmp5 = true; else {                      Tmp5 = (s_33556794[i_33556830] < 128);                    }                  if (Tmp5) {
                  break L3;
                  }
                  
                  c_33556832 = s_33556794[i_33556830];
                }
            } while(false);
++excHandler;
            Tmp7 = framePtr;
            try {
            res_33556829[j_33556831] = decodeURIComponent(helper_33556844.join(""));
--excHandler;
} catch (EXC) {
 var prevJSError = lastJSError;
 lastJSError = EXC;
 --excHandler;
            framePtr = Tmp7;
            res_33556829[j_33556831] = helper_33556844.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Tmp7;
            }
          }
          
          j_33556831 += 1;
        }
    } while(false);
    if (res_33556829.length < j_33556831) { for (var i=res_33556829.length;i<j_33556831;++i) res_33556829.push(null); }
               else { res_33556829.length = j_33556831; };
    result_33556795 = res_33556829.join("");

  return result_33556795;

}
function raiseException(e_33556655, ename_33556656) {
    e_33556655.name = ename_33556656;
    if ((excHandler == 0)) {
    unhandledException(e_33556655);
    }
    
    e_33556655.trace = nimCopy(null, rawWriteStackTrace_33556619(), NTI33554439);
    throw e_33556655;

  
}
function subInt(a_33556931, b_33556932) {
        var result = a_33556931 - b_33556932;
    checkOverflowInt(result);
    return result;
  

  
}
function chckIndx(i_33557174, a_33557175, b_33557176) {
      var Tmp1;

  var result_33557177 = 0;

  BeforeRet: do {
      if (!(a_33557175 <= i_33557174)) Tmp1 = false; else {        Tmp1 = (i_33557174 <= b_33557176);      }    if (Tmp1) {
    result_33557177 = i_33557174;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557174, a_33557175, b_33557176);
    }
    
  } while (false);

  return result_33557177;

}
function addInt(a_33556927, b_33556928) {
        var result = a_33556927 + b_33556928;
    checkOverflowInt(result);
    return result;
  

  
}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/std/jsheaders.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders_examples1",prev:framePtr,filename:"/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim",line:0};
framePtr = F;
framePtr = F.prev;
function isFatPointer_33557121(ti_33557122) {
  var result_33557123 = false;

  BeforeRet: do {
    result_33557123 = !((ConstSet1[ti_33557122.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_33557123;

}
function nimCopyAux(dest_33557134, src_33557135, n_33557136) {
    switch (n_33557136.kind) {
    case 0:
      break;
    case 1:
            dest_33557134[n_33557136.offset] = nimCopy(dest_33557134[n_33557136.offset], src_33557135[n_33557136.offset], n_33557136.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557136.sons.length; i++) {
      nimCopyAux(dest_33557134, src_33557135, n_33557136.sons[i]);
    }
    
      break;
    case 3:
            dest_33557134[n_33557136.offset] = nimCopy(dest_33557134[n_33557136.offset], src_33557135[n_33557136.offset], n_33557136.typ);
      for (var i = 0; i < n_33557136.sons.length; ++i) {
        nimCopyAux(dest_33557134, src_33557135, n_33557136.sons[i][1]);
      }
    
      break;
    }

  
}
function add_33556416(x_33556417, x_33556417_Idx, y_33556418) {
          if (x_33556417[x_33556417_Idx] === null) { x_33556417[x_33556417_Idx] = []; }
      var off = x_33556417[x_33556417_Idx].length;
      x_33556417[x_33556417_Idx].length += y_33556418.length;
      for (var i = 0; i < y_33556418.length; ++i) {
        x_33556417[x_33556417_Idx][off+i] = y_33556418.charCodeAt(i);
      }
    

  
}
function auxWriteStackTrace_33556531(f_33556532) {
          var Tmp3;

  var result_33556533 = [[]];

    var it_33556541 = f_33556532;
    var i_33556542 = 0;
    var total_33556543 = 0;
    var tempFrames_33556544 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555886);
    L1: do {
        L2: while (true) {
          if (!!((it_33556541 == null))) Tmp3 = false; else {            Tmp3 = (i_33556542 <= 63);          }        if (!Tmp3) break L2;
          tempFrames_33556544[i_33556542].Field0 = it_33556541.procname;
          tempFrames_33556544[i_33556542].Field1 = it_33556541.line;
          tempFrames_33556544[i_33556542].Field2 = it_33556541.filename;
          i_33556542 += 1;
          total_33556543 += 1;
          it_33556541 = it_33556541.prev;
        }
    } while(false);
    L4: do {
        L5: while (true) {
        if (!!((it_33556541 == null))) break L5;
          total_33556543 += 1;
          it_33556541 = it_33556541.prev;
        }
    } while(false);
    result_33556533[0] = nimCopy(null, [], NTI33554439);
    if (!((total_33556543 == i_33556542))) {
    result_33556533[0].push.apply(result_33556533[0], makeNimstrLit("("));;
    result_33556533[0].push.apply(result_33556533[0], cstrToNimstr(((total_33556543 - i_33556542))+""));;
    result_33556533[0].push.apply(result_33556533[0], makeNimstrLit(" calls omitted) ...\x0A"));;
    }
    
    L6: do {
      var j_33556590 = 0;
      var colontmp__486539516 = 0;
      colontmp__486539516 = (i_33556542 - 1);
      var res_486539518 = colontmp__486539516;
      L7: do {
          L8: while (true) {
          if (!(0 <= res_486539518)) break L8;
            j_33556590 = res_486539518;
            result_33556533[0].push.apply(result_33556533[0], cstrToNimstr(tempFrames_33556544[j_33556590].Field2));;
            if ((0 < tempFrames_33556544[j_33556590].Field1)) {
            result_33556533[0].push.apply(result_33556533[0], makeNimstrLit("("));;
            result_33556533[0].push.apply(result_33556533[0], cstrToNimstr((tempFrames_33556544[j_33556590].Field1)+""));;
            if (false) {
            result_33556533[0].push.apply(result_33556533[0], makeNimstrLit(", "));;
            result_33556533[0].push.apply(result_33556533[0], makeNimstrLit("0"));;
            }
            
            result_33556533[0].push.apply(result_33556533[0], makeNimstrLit(")"));;
            }
            
            result_33556533[0].push.apply(result_33556533[0], makeNimstrLit(" at "));;
            add_33556416(result_33556533, 0, tempFrames_33556544[j_33556590].Field0);
            result_33556533[0].push.apply(result_33556533[0], makeNimstrLit("\x0A"));;
            res_486539518 -= 1;
          }
      } while(false);
    } while(false);

  return result_33556533[0];

}
function rawWriteStackTrace_33556619() {
  var result_33556620 = [];

    if (!((framePtr == null))) {
    result_33556620 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A") || []).concat(auxWriteStackTrace_33556531(framePtr) || []), NTI33554439);
    }
    else {
      result_33556620 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI33554439);
    }
    

  return result_33556620;

}
function newSeq_33556812(len_33556814) {
  var result_33556815 = [];

  var F={procname:"newSeq.newSeq",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/system.nim",line:0};
  framePtr = F;
    F.line = 680;
    result_33556815 = new Array(len_33556814); for (var i=0;i<len_33556814;++i) {result_33556815[i]=null;}  framePtr = F.prev;

  return result_33556815;

}
function unhandledException(e_33556651) {
    var buf_33556652 = [[]];
    if (!(((e_33556651.message).length == 0))) {
    buf_33556652[0].push.apply(buf_33556652[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_33556652[0].push.apply(buf_33556652[0], e_33556651.message);;
    }
    else {
    buf_33556652[0].push.apply(buf_33556652[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_33556652[0].push.apply(buf_33556652[0], makeNimstrLit(" ["));;
    add_33556416(buf_33556652, 0, e_33556651.name);
    buf_33556652[0].push.apply(buf_33556652[0], makeNimstrLit("]\x0A"));;
    buf_33556652[0].push.apply(buf_33556652[0], rawWriteStackTrace_33556619());;
    var cbuf_33556653 = toJSStr(buf_33556652[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556653);
  }
  else {
    throw cbuf_33556653;
  }
  

  
}
function sysFatal_218103843(message_218103846) {
  var F={procname:"sysFatal.sysFatal",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/system/fatal.nim",line:0};
  framePtr = F;
    F.line = 53;
    raiseException({message: nimCopy(null, message_218103846, NTI33554439), m_type: NTI33555107, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}
function raiseAssert_218103841(msg_218103842) {
  var F={procname:"assertions.raiseAssert",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/system/assertions.nim",line:0};
  framePtr = F;
    F.line = 58;
    sysFatal_218103843(msg_218103842);
  framePtr = F.prev;

  
}
function failedAssertImpl_218103865(msg_218103866) {
  var F={procname:"assertions.failedAssertImpl",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/system/assertions.nim",line:0};
  framePtr = F;
    F.line = 68;
    raiseAssert_218103841(msg_218103866);
  framePtr = F.prev;

  
}
function HEX2EHEX2E_486539297(a_486539300, b_486539301) {
  var result_486539304 = ({a: 0, b: 0});

  var F={procname:".....",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/system.nim",line:0};
  framePtr = F;
    F.line = 511;
    result_486539304 = nimCopy(result_486539304, {a: a_486539300, b: b_486539301}, NTI486539298);
  framePtr = F.prev;

  return result_486539304;

}
function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI33555105, name: null, trace: [], up: null}, "OverflowDefect");

  
}
function checkOverflowInt(a_33556925) {
        if (a_33556925 > 2147483647 || a_33556925 < -2147483648) raiseOverflow();
  

  
}
function raiseIndexError(i_33556742, a_33556743, b_33556744) {
    var Tmp1;

    if ((b_33556744 < a_33556743)) {
    Tmp1 = makeNimstrLit("index out of bounds, the container is empty");
    }
    else {
    Tmp1 = (makeNimstrLit("index ") || []).concat(cstrToNimstr((i_33556742)+"") || [],makeNimstrLit(" not in ") || [],cstrToNimstr((a_33556743)+"") || [],makeNimstrLit(" .. ") || [],cstrToNimstr((b_33556744)+"") || []);
    }
    
    raiseException({message: nimCopy(null, Tmp1, NTI33554439), parent: null, m_type: NTI33555111, name: null, trace: [], up: null}, "IndexDefect");

  
}
function HEX3DHEX3D_486539275(x_486539277, y_486539278) {
  var result_486539279 = false;

  var F={procname:"==.==",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/system/comparisons.nim",line:0};
  framePtr = F;
  BeforeRet: do {
    F.line = 301;
    var sameObject_486539287 = false;
    F.line = 302;
    sameObject_486539287 = x_486539277 === y_486539278
    if (sameObject_486539287) {
    F.line = 303;
    result_486539279 = true;
    break BeforeRet;
    }
    
    if (!(((x_486539277).length == (y_486539278).length))) {
    F.line = 306;
    result_486539279 = false;
    break BeforeRet;
    }
    
    L1: do {
      F.line = 308;
      var i_486539333 = 0;
      F.line = 126;
      var colontmp__486539523 = ({a: 0, b: 0});
      F.line = 308;
      colontmp__486539523 = nimCopy(colontmp__486539523, HEX2EHEX2E_486539297(0, subInt((x_486539277).length, 1)), NTI486539298);
      L2: do {
        F.line = 129;
        var x_486539529 = 0;
        F.line = 90;
        var res_486539530 = colontmp__486539523.a;
        L3: do {
          F.line = 91;
            L4: while (true) {
            if (!(res_486539530 <= colontmp__486539523.b)) break L4;
              F.line = 129;
              x_486539529 = res_486539530;
              F.line = 308;
              i_486539333 = x_486539529;
              if (!((x_486539277[chckIndx(i_486539333, 0, (x_486539277).length-1)] == y_486539278[chckIndx(i_486539333, 0, (y_486539278).length-1)]))) {
              F.line = 310;
              result_486539279 = false;
              break BeforeRet;
              }
              
              F.line = 93;
              res_486539530 = addInt(res_486539530, 1);
            }
        } while(false);
      } while(false);
    } while(false);
    F.line = 312;
    result_486539279 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_486539279;

}
function HEX3DHEX3D_486539397(x_486539399, y_486539400) {
  var result_486539401 = false;

  var F={procname:"==.==",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/system.nim",line:0};
  framePtr = F;
  BeforeRet: do {
    if (!((x_486539399["Field0"] == y_486539400["Field0"]))) {
    F.line = 1899;
    result_486539401 = false;
    break BeforeRet;
    }
    
    if (!((x_486539399["Field1"] == y_486539400["Field1"]))) {
    F.line = 1899;
    result_486539401 = false;
    break BeforeRet;
    }
    
    F.line = 1900;
    result_486539401 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_486539401;

}
function HEX3DHEX3D_486539366(x_486539368, y_486539369) {
  var result_486539370 = false;

  var F={procname:"==.==",prev:framePtr,filename:"/home/runner/work/Nim/Nim/lib/system/comparisons.nim",line:0};
  framePtr = F;
  BeforeRet: do {
    F.line = 301;
    var sameObject_486539378 = false;
    F.line = 302;
    sameObject_486539378 = x_486539368 === y_486539369
    if (sameObject_486539378) {
    F.line = 303;
    result_486539370 = true;
    break BeforeRet;
    }
    
    if (!(((x_486539368).length == (y_486539369).length))) {
    F.line = 306;
    result_486539370 = false;
    break BeforeRet;
    }
    
    L1: do {
      F.line = 308;
      var i_486539396 = 0;
      F.line = 126;
      var colontmp__486539533 = ({a: 0, b: 0});
      F.line = 308;
      colontmp__486539533 = nimCopy(colontmp__486539533, HEX2EHEX2E_486539297(0, subInt((x_486539368).length, 1)), NTI486539298);
      L2: do {
        F.line = 129;
        var x_486539535 = 0;
        F.line = 90;
        var res_486539536 = colontmp__486539533.a;
        L3: do {
          F.line = 91;
            L4: while (true) {
            if (!(res_486539536 <= colontmp__486539533.b)) break L4;
              F.line = 129;
              x_486539535 = res_486539536;
              F.line = 308;
              i_486539396 = x_486539535;
              if (!(HEX3DHEX3D_486539397(x_486539368[chckIndx(i_486539396, 0, (x_486539368).length-1)], y_486539369[chckIndx(i_486539396, 0, (y_486539369).length-1)]))) {
              F.line = 310;
              result_486539370 = false;
              break BeforeRet;
              }
              
              F.line = 93;
              res_486539536 = addInt(res_486539536, 1);
            }
        } while(false);
      } while(false);
    } while(false);
    F.line = 312;
    result_486539370 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_486539370;

}
var F={procname:"module jsheaders_examples1",prev:framePtr,filename:"/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim",line:0};
framePtr = F;
L1: do {
  F.line = 9;
  var header_486539265 = new Headers();
  F.line = 10;
  header_486539265.append("key", "value");
  if (!(header_486539265.has("key"))) {
  F.line = 11;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(11, 10) `header.hasKey(\"key\")` "));
  }
  
  if (!(HEX3DHEX3D_486539275(Array.from(header_486539265.keys()), ["key"]))) {
  F.line = 12;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(12, 10) `header.keys() == @[\"key\".cstring]` "));
  }
  
  if (!(HEX3DHEX3D_486539275(Array.from(header_486539265.values()), ["value"]))) {
  F.line = 13;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(13, 10) `header.values() == @[\"value\".cstring]` "));
  }
  
  if (!((header_486539265.get("key") == "value"))) {
  F.line = 14;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(14, 10) `header[\"key\"] == \"value\".cstring` "));
  }
  
  F.line = 15;
  header_486539265.set("other", "another");
  if (!((header_486539265.get("other") == "another"))) {
  F.line = 16;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(16, 10) `header[\"other\"] == \"another\".cstring` "));
  }
  
  if (!(HEX3DHEX3D_486539366(Array.from(header_486539265.entries()), [{Field0: "key", Field1: "value"}, {Field0: "other", Field1: "another"}]))) {
  F.line = 17;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(17, 10) `header.entries() ==\x0A    @[(\"key\".cstring, \"value\".cstring), (\"other\".cstring, \"another\".cstring)]` "));
  }
  
  if (!((JSON.stringify(Array.from(header_486539265.entries())) == "[[\"key\",\"value\"],[\"other\",\"another\"]]"))) {
  F.line = 18;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(18, 10) `header.toCstring() == \"\"\"[[\"key\",\"value\"],[\"other\",\"another\"]]\"\"\".cstring` "));
  }
  
  F.line = 19;
  header_486539265.delete("other");
  if (!(HEX3DHEX3D_486539366(Array.from(header_486539265.entries()), [{Field0: "key", Field1: "value"}]))) {
  F.line = 20;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(20, 10) `header.entries() == @[(\"key\".cstring, \"value\".cstring)]` "));
  }
  
  F.line = 21;
  (() => { const header = header_486539265; Array.from(header.keys()).forEach((key) => header.delete(key)) })();
  if (!(HEX3DHEX3D_486539366(Array.from(header_486539265.entries()), []))) {
  F.line = 22;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(22, 10) `header.entries() == @[]` "));
  }
  
  if (!((Array.from(header_486539265.entries()).length == 0))) {
  F.line = 23;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(23, 10) `header.len == 0` "));
  }
  
} while(false);
L2: do {
  F.line = 26;
  var header_486539448 = new Headers();
  F.line = 27;
  header_486539448.append("key", "a");
  F.line = 28;
  header_486539448.append("key", "b");
  F.line = 29;
  header_486539448.append("key", "c");
  if (!((header_486539448.get("key") == "a, b, c"))) {
  F.line = 30;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(30, 10) `header[\"key\"] == \"a, b, c\".cstring` "));
  }
  
  F.line = 31;
  header_486539448.set("key", "value");
  if (!((header_486539448.get("key") == "value"))) {
  F.line = 32;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(32, 10) `header[\"key\"] == \"value\".cstring` "));
  }
  
} while(false);
L3: do {
  F.line = 35;
  var header_486539459 = new Headers();
  F.line = 36;
  header_486539459.set("key", "a");
  F.line = 37;
  header_486539459.set("key", "b");
  if (!((header_486539459.get("key") == "b"))) {
  F.line = 38;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(38, 10) `header[\"key\"] == \"b\".cstring` "));
  }
  
} while(false);
framePtr = F.prev;
var F={procname:"module jsheaders_examples1",prev:framePtr,filename:"/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders_examples1",prev:framePtr,filename:"/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders_group0_examples",prev:framePtr,filename:"/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_group0_examples.nim",line:0};
framePtr = F;
framePtr = F.prev;
var F={procname:"module jsheaders_group0_examples",prev:framePtr,filename:"/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_group0_examples.nim",line:0};
framePtr = F;
framePtr = F.prev;
