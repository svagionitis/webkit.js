// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](424 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 424;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22WorkerThreadableLoaderC1EPNS_17WorkerGlobalScopeEPNS_22ThreadableLoaderClientERKN3WTF6StringERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsE;
var __ZN7WebCore22WorkerThreadableLoaderD1Ev;
var __ZN7WebCore22WorkerThreadableLoader16MainThreadBridgeC1EN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEERNS_17WorkerLoaderProxyERKNS2_6StringERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsESA_;
var __ZN7WebCore22WorkerThreadableLoader16MainThreadBridgeD1Ev;
/* memory initializer */ allocate([82,101,102,101,114,101,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,108,111,97,100,82,101,115,111,117,114,99,101,83,121,110,99,104,114,111,110,111,117,115,108,121,77,111,100,101,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiid(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiid"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viid(index,a1,a2,a3) {
  try {
    Module["dynCall_viid"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS_13ResourceErrorERKS7_EE=(H_BASE+272)|0;
  var __ZTVN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEyyyyEE=(H_BASE+144)|0;
  var __ZTVN7WebCore16CrossThreadTask1IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEEE=(H_BASE+368)|0;
  var __ZTVN7WebCore22WorkerThreadableLoader16MainThreadBridgeE=(H_BASE+56)|0;
  var __ZTVN7WebCore16CrossThreadTask4IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_N3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES7_NS_23ThreadableLoaderOptionsES8_NS4_6StringERKS9_EE=(H_BASE+112)|0;
  var __ZTVN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS1_10PassOwnPtrINS1_6VectorIcLj0ENS1_15CrashOnOverflowEEEEESB_EE=(H_BASE+304)|0;
  var __ZTVN7WebCore16CrossThreadTask1IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_EE=(H_BASE+336)|0;
  var __ZTVN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEES4_NS_13ResourceErrorERKS5_EE=(H_BASE+240)|0;
  var __ZTVN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmNS1_10PassOwnPtrINS_31CrossThreadResourceResponseDataEEES9_EE=(H_BASE+208)|0;
  var __ZTVN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmddEE=(H_BASE+176)|0;
  var __ZTVN7WebCore22WorkerThreadableLoaderE=(H_BASE+16)|0;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_ii=env.invoke_ii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiid=env.invoke_viiid;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viid=env.invoke_viid;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore18createCallbackTaskINS_29AllowCrossThreadAccessWrapperINS_22WorkerThreadableLoader16MainThreadBridgeEEEPS3_NS_15ResourceRequestEN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEENS_23ThreadableLoaderOptionsESB_NS7_6StringERKSC_EENS8_INS_22ScriptExecutionContext4TaskEEEPFvPSF_T0_T2_T4_T6_ERKT_RKT1_RKT3_RKT5_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 48 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 __ZN7WebCore21CrossThreadCopierBaseILb0ELb0ENS_15ResourceRequestEE4copyERKS1_(i8, i4);
 i4 = i9;
 i3 = i5;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i4 + 16 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i4 + 20 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i4 + 24 >> 2] = HEAP32[i3 + 24 >> 2];
 i3 = i9 + 28 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 + 28 >> 2];
 i12 = i9 + 32 | 0;
 HEAP32[i12 >> 2] = HEAP32[i5 + 32 >> 2];
 i13 = i9 + 36 | 0;
 i14 = HEAP32[i5 + 36 >> 2] | 0;
 HEAP32[i13 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i5 = i14 | 0;
  tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue + 1, tempValue;
 }
 __ZN7WebCore21CrossThreadCopierBaseILb0ELb0EN3WTF6StringEE4copyERKS2_(i10, i6);
 i6 = __ZN3WTF10fastMallocEj(60) | 0;
 i5 = i8 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = H_BASE + 120;
 HEAP32[i6 + 4 >> 2] = i2;
 HEAP32[i6 + 8 >> 2] = i11;
 HEAP32[i6 + 12 >> 2] = i8;
 i8 = i6 + 16 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i8 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i8 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i8 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i6 + 44 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i6 + 48 >> 2] = HEAP32[i12 >> 2];
 i12 = HEAP32[i13 >> 2] | 0;
 HEAP32[i6 + 52 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i13 = i12 | 0;
  tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue + 1, tempValue;
 }
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i6 + 56 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i12 = i10 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i6;
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 | 0;
   i1 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i13 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN7WebCore23ThreadableLoaderOptionsD1Ev(i9);
 i9 = HEAP32[i5 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore30CrossThreadResourceRequestDataD2Ev(i9);
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore22WorkerThreadableLoaderC2EPNS_17WorkerGlobalScopeEPNS_22ThreadableLoaderClientERKN3WTF6StringERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 24;
 i11 = i1 + 8 | 0;
 HEAP32[i11 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i12 = i2 + 156 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i12 >> 2] = 1;
 HEAP32[i12 + 4 >> 2] = i3;
 HEAP8[i12 + 8 | 0] = 0;
 i3 = i1 + 12 | 0;
 HEAP32[i3 >> 2] = i12;
 i12 = i1 + 16 | 0;
 i1 = __ZN3WTF10fastMallocEj(20) | 0;
 i13 = i1;
 i14 = HEAP32[i3 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i3 = i14 | 0;
  tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue + 1, tempValue;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 264 >> 2] | 0) + 120 >> 2] | 0;
 __ZNK7WebCore3URL24strippedForUseAsReferrerEv(i10, i2 + 196 | 0);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i14;
 i14 = i1 + 12 | 0;
 HEAP32[i14 >> 2] = i3;
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 16 | 0, i4);
 i4 = HEAP32[i14 >> 2] | 0;
 i14 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i13;
 __ZN7WebCore18createCallbackTaskINS_29AllowCrossThreadAccessWrapperINS_22WorkerThreadableLoader16MainThreadBridgeEEEPS3_NS_15ResourceRequestEN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEENS_23ThreadableLoaderOptionsESB_NS7_6StringERKSC_EENS8_INS_22ScriptExecutionContext4TaskEEEPFvPSF_T0_T2_T4_T6_ERKT_RKT1_RKT3_RKT5_(i8, F_BASE_viiiii + 2 | 0, i9, i5, i6, i10);
 FUNCTION_TABLE_vii[i14 & 31](i4, i8);
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 }
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i12 >> 2] = i13;
  STACKTOP = i7;
  return;
 }
 i10 = i4 | 0;
 i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  HEAP32[i12 >> 2] = i13;
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i10 >> 2] = i8;
  HEAP32[i12 >> 2] = i13;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore22WorkerThreadableLoaderC1EPNS_17WorkerGlobalScopeEPNS_22ThreadableLoaderClientERKN3WTF6StringERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 24;
 i11 = i1 + 8 | 0;
 HEAP32[i11 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i12 = i2 + 156 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i12 >> 2] = 1;
 HEAP32[i12 + 4 >> 2] = i3;
 HEAP8[i12 + 8 | 0] = 0;
 i3 = i1 + 12 | 0;
 HEAP32[i3 >> 2] = i12;
 i12 = i1 + 16 | 0;
 i1 = __ZN3WTF10fastMallocEj(20) | 0;
 i13 = i1;
 i14 = HEAP32[i3 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i3 = i14 | 0;
  tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue + 1, tempValue;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 264 >> 2] | 0) + 120 >> 2] | 0;
 __ZNK7WebCore3URL24strippedForUseAsReferrerEv(i10, i2 + 196 | 0);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i14;
 i14 = i1 + 12 | 0;
 HEAP32[i14 >> 2] = i3;
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 16 | 0, i4);
 i4 = HEAP32[i14 >> 2] | 0;
 i14 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i13;
 __ZN7WebCore18createCallbackTaskINS_29AllowCrossThreadAccessWrapperINS_22WorkerThreadableLoader16MainThreadBridgeEEEPS3_NS_15ResourceRequestEN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEENS_23ThreadableLoaderOptionsESB_NS7_6StringERKSC_EENS8_INS_22ScriptExecutionContext4TaskEEEPFvPSF_T0_T2_T4_T6_ERKT_RKT1_RKT3_RKT5_(i8, F_BASE_viiiii + 2 | 0, i9, i5, i6, i10);
 FUNCTION_TABLE_vii[i14 & 31](i4, i8);
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 }
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i12 >> 2] = i13;
  STACKTOP = i7;
  return;
 }
 i10 = i4 | 0;
 i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  HEAP32[i12 >> 2] = i13;
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i10 >> 2] = i8;
  HEAP32[i12 >> 2] = i13;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore22WorkerThreadableLoader25loadResourceSynchronouslyEPNS_17WorkerGlobalScopeERKNS_15ResourceRequestERNS_22ThreadableLoaderClientERKNS_23ThreadableLoaderOptionsE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i1 + 264 >> 2] | 0;
 i9 = i8 + 12 | 0;
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 400 | 0);
 i10 = i8 + 116 | 0;
 i8 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i8;
 __ZN3WTF6String6numberEm(i7, i8);
 __ZN3WTF6String6appendERKS0_(i6, i7);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i8 = __ZN3WTF10fastMallocEj(20) | 0;
 i10 = i8;
 __ZN7WebCore22WorkerThreadableLoaderC2EPNS_17WorkerGlobalScopeEPNS_22ThreadableLoaderClientERKN3WTF6StringERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsE(i10, i1, i3, i6, i2, i4);
 i4 = i8 + 12 | 0;
 do {
  if ((HEAP8[(HEAP32[i4 >> 2] | 0) + 8 | 0] & 1) == 0) {
   while (1) {
    i11 = (__ZN7WebCore13WorkerRunLoop9runInModeEPNS_17WorkerGlobalScopeERKN3WTF6StringENS0_8WaitModeE(i9, i1, i6, 0) | 0) == 0;
    i12 = (HEAP8[(HEAP32[i4 >> 2] | 0) + 8 | 0] & 1) != 0;
    if (i12 | i11) {
     break;
    }
   }
   if (!(i11 & (i12 ^ 1))) {
    i13 = 9;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[HEAP32[i8 >> 2] >> 2] & 63](i10);
   i13 = 10;
  } else {
   i13 = 9;
  }
 } while (0);
 if ((i13 | 0) == 9) {
  if ((i8 | 0) != 0) {
   i13 = 10;
  }
 }
 do {
  if ((i13 | 0) == 10) {
   i12 = i8 + 4 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i12 >> 2] = i11;
    break;
   }
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 63](i10);
  }
 } while (0);
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i10 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  STACKTOP = i5;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viid + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 4;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge6cancelEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = H_BASE + 344;
 HEAP32[i7 + 4 >> 2] = F_BASE_vii + 6;
 HEAP32[i7 + 8 >> 2] = i1;
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = i7;
 FUNCTION_TABLE_vii[i6 & 31](i5, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = i1 + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i8 = i1 + 8 | 0;
 if ((HEAP8[i8] & 1) != 0) {
  i9 = HEAP32[i3 >> 2] | 0;
  i10 = i9 + 8 | 0;
  HEAP8[i10] = 1;
  i11 = i9 + 4 | 0;
  HEAP32[i11 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 _memset(i4 | 0, 0, 19) | 0;
 HEAP8[i4 + 17 | 0] = 1;
 HEAP8[i8] = 1;
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 31](i8, i4);
 }
 i8 = HEAP32[i4 + 12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i3 >> 2] | 0;
  i10 = i9 + 8 | 0;
  HEAP8[i10] = 1;
  i11 = i9 + 4 | 0;
  HEAP32[i11 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 i5 = i8 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  i9 = HEAP32[i3 >> 2] | 0;
  i10 = i9 + 8 | 0;
  HEAP8[i10] = 1;
  i11 = i9 + 4 | 0;
  HEAP32[i11 >> 2] = 0;
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  i9 = HEAP32[i3 >> 2] | 0;
  i10 = i9 + 8 | 0;
  HEAP8[i10] = 1;
  i11 = i9 + 4 | 0;
  HEAP32[i11 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore18createCallbackTaskIN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEENS1_10PassRefPtrIS3_EENS_13ResourceErrorERKS7_EENS1_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPSB_T0_T2_ERKT_RKT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i3 = i7 | 0;
  tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue + 1, tempValue;
 }
 __ZN7WebCore21CrossThreadCopierBaseILb0ELb0ENS_13ResourceErrorEE4copyERKS1_(i6, i4);
 i4 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i4 >> 2] = H_BASE + 248;
 HEAP32[i4 + 4 >> 2] = i2;
 HEAP32[i4 + 8 >> 2] = i7;
 i7 = i6 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i4 + 12 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i4 + 16 >> 2] = HEAP32[i6 + 4 >> 2];
 i3 = i6 + 8 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i4 + 20 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i6 + 12 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i4 + 24 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i9 = i2 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP8[i4 + 28 | 0] = HEAP8[i6 + 16 | 0] & 1;
 HEAP8[i4 + 29 | 0] = HEAP8[i6 + 17 | 0] & 1;
 HEAP8[i4 + 30 | 0] = HEAP8[i6 + 18 | 0] & 1;
 HEAP32[i1 >> 2] = i4;
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = i4 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore18createCallbackTaskIN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEES4_NS_13ResourceErrorERKS5_EENS1_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPS9_T0_T2_ERKT_RKT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i3 = i7 | 0;
  tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue + 1, tempValue;
 }
 __ZN7WebCore21CrossThreadCopierBaseILb0ELb0ENS_13ResourceErrorEE4copyERKS1_(i6, i4);
 i4 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i4 >> 2] = H_BASE + 280;
 HEAP32[i4 + 4 >> 2] = i2;
 HEAP32[i4 + 8 >> 2] = i7;
 i7 = i6 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i4 + 12 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i4 + 16 >> 2] = HEAP32[i6 + 4 >> 2];
 i3 = i6 + 8 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i4 + 20 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i6 + 12 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i4 + 24 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i9 = i2 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP8[i4 + 28 | 0] = HEAP8[i6 + 16 | 0] & 1;
 HEAP8[i4 + 29 | 0] = HEAP8[i6 + 17 | 0] & 1;
 HEAP8[i4 + 30 | 0] = HEAP8[i6 + 18 | 0] & 1;
 HEAP32[i1 >> 2] = i4;
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = i4 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore34CrossThreadResourceRequestDataBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 128 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 120 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 124 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge22mainThreadCreateLoaderEPNS_22ScriptExecutionContextEPS1_N3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEENS_23ThreadableLoaderOptionsERKNS5_6StringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 if ((i1 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = i1 - 156 + 68 | 0;
 }
 i1 = i8 | 0;
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 __ZN7WebCore19ResourceRequestBase5adoptEN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEE(i7, i8);
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN7WebCore30CrossThreadResourceRequestDataD2Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
 }
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i7 | 0, H_BASE + 8 | 0, i5);
 __ZN7WebCore24DocumentThreadableLoader6createEPNS_8DocumentEPNS_22ThreadableLoaderClientERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsE(i9, i10, i2 | 0, i7, i4);
 i4 = i9 | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i10 = i2 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i9;
 do {
  if ((i2 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 63](i2);
   i9 = HEAP32[i4 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 + 4 | 0;
   i9 = i10 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i10 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i5);
  }
 } while (0);
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore15ResourceRequestD2Ev(i7);
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore19ResourceRequestBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 144 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 136 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 116 | 0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore35CrossThreadResourceResponseDataBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore20ResourceResponseBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 80 | 0);
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore16CrossThreadTask4IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_N3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES7_NS_23ThreadableLoaderOptionsES8_NS4_6StringERKS9_E11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i8 = i4 | 0;
 i9 = i1 + 12 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i10;
 i10 = i5;
 i9 = i1 + 16 | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i10 + 16 >> 2] = HEAP32[i9 + 16 >> 2];
 HEAP32[i10 + 20 >> 2] = HEAP32[i9 + 20 >> 2];
 HEAP32[i10 + 24 >> 2] = HEAP32[i9 + 24 >> 2];
 HEAP32[i5 + 28 >> 2] = HEAP32[i1 + 44 >> 2];
 HEAP32[i5 + 32 >> 2] = HEAP32[i1 + 48 >> 2];
 i9 = HEAP32[i1 + 52 >> 2] | 0;
 HEAP32[i5 + 36 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i10 = i9 | 0;
  tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue + 1, tempValue;
 }
 FUNCTION_TABLE_viiiii[i6 & 7](i2, i7, i4, i5, i1 + 56 | 0);
 __ZN7WebCore23ThreadableLoaderOptionsD1Ev(i5);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore30CrossThreadResourceRequestDataD2Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridgeC2EN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEERNS_17WorkerLoaderProxyERKNS2_6StringERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsESA_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 4 >> 2] = 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = i3;
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 16 | 0, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i10 >> 2] = i1;
 __ZN7WebCore18createCallbackTaskINS_29AllowCrossThreadAccessWrapperINS_22WorkerThreadableLoader16MainThreadBridgeEEEPS3_NS_15ResourceRequestEN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEENS_23ThreadableLoaderOptionsESB_NS7_6StringERKSC_EENS8_INS_22ScriptExecutionContext4TaskEEEPFvPSF_T0_T2_T4_T6_ERKT_RKT1_RKT3_RKT5_(i9, F_BASE_viiiii + 2 | 0, i10, i5, i6, i7);
 FUNCTION_TABLE_vii[i2 & 31](i4, i9);
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridgeC1EN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEERNS_17WorkerLoaderProxyERKNS2_6StringERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsESA_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 4 >> 2] = 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = i3;
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 16 | 0, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i10 >> 2] = i1;
 __ZN7WebCore18createCallbackTaskINS_29AllowCrossThreadAccessWrapperINS_22WorkerThreadableLoader16MainThreadBridgeEEEPS3_NS_15ResourceRequestEN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEENS_23ThreadableLoaderOptionsESB_NS7_6StringERKSC_EENS8_INS_22ScriptExecutionContext4TaskEEEPFvPSF_T0_T2_T4_T6_ERKT_RKT1_RKT3_RKT5_(i9, F_BASE_viiiii + 2 | 0, i10, i5, i6, i7);
 FUNCTION_TABLE_vii[i2 & 31](i4, i9);
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore22WorkerThreadableLoaderD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 24;
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 i5 = HEAP32[i4 + 8 >> 2] | 0;
 HEAP8[i5 + 8 | 0] = 1;
 HEAP32[i5 + 4 >> 2] = 0;
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = H_BASE + 344;
 HEAP32[i7 + 4 >> 2] = F_BASE_vii + 8;
 HEAP32[i7 + 8 >> 2] = i4;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i7;
 FUNCTION_TABLE_vii[i6 & 31](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i3 + 156 | 0;
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
 i4 = i1 - 156 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22WorkerThreadableLoaderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 24;
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 i5 = HEAP32[i4 + 8 >> 2] | 0;
 HEAP8[i5 + 8 | 0] = 1;
 HEAP32[i5 + 4 >> 2] = 0;
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = H_BASE + 344;
 HEAP32[i7 + 4 >> 2] = F_BASE_vii + 8;
 HEAP32[i7 + 8 >> 2] = i4;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i7;
 FUNCTION_TABLE_vii[i6 & 31](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i3 + 156 | 0;
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
 i4 = i1 - 156 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore30CrossThreadResourceRequestDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 156 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 144 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore34CrossThreadResourceRequestDataBaseD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore34CrossThreadResourceRequestDataBaseD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore34CrossThreadResourceRequestDataBaseD2Ev(i5);
  return;
 }
}
function __ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS_13ResourceErrorERKS7_ED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 280;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEES4_NS_13ResourceErrorERKS5_ED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 248;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15ResourceRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 172 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 168 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 164 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge18didReceiveResponseEmRKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] | 0;
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i10 = i9 | 0;
  tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue + 1, tempValue;
 }
 __ZN7WebCore21CrossThreadCopierBaseILb0ELb0ENS_16ResourceResponseEE4copyERKS1_(i5, i3);
 i3 = __ZN3WTF10fastMallocEj(20) | 0;
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i3 >> 2] = H_BASE + 216;
 HEAP32[i3 + 4 >> 2] = F_BASE_viiii + 2;
 HEAP32[i3 + 8 >> 2] = i9;
 HEAP32[i3 + 12 >> 2] = i2;
 HEAP32[i3 + 16 >> 2] = i5;
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = i3;
 i3 = HEAP32[i10 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore35CrossThreadResourceResponseDataBaseD2Ev(i3 | 0);
  __ZN3WTF8fastFreeEPv(i3);
 }
 FUNCTION_TABLE_iiii[i8 & 1](i7, i6, i1 + 16 | 0) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge14didReceiveDataEPKci(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 i7 = i6;
 HEAP32[i7 >> 2] = 0;
 i8 = i6 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i9 = 0;
 } else {
  i10 = __ZN3WTF18fastMallocGoodSizeEj(i3) | 0;
  HEAP32[i8 >> 2] = i10;
  i8 = __ZN3WTF10fastMallocEj(i10) | 0;
  HEAP32[i7 >> 2] = i8;
  i9 = i8;
 }
 _memcpy(i9 | 0, i2 | 0, i3) | 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 i2 = HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] | 0;
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue + 1, tempValue;
 }
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 >> 2] = H_BASE + 312;
 HEAP32[i8 + 4 >> 2] = F_BASE_viii + 8;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i8 + 12 >> 2] = i6;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i8;
 FUNCTION_TABLE_iiii[i2 & 1](i3, i5, i1 + 16 | 0) | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS1_10PassOwnPtrINS1_6VectorIcLj0ENS1_15CrashOnOverflowEEEEESB_E11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i7 = i4 | 0;
 i8 = i1 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i9;
 i9 = i5 | 0;
 i8 = i1 + 12 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 >> 2] = i1;
 FUNCTION_TABLE_viii[i6 & 15](i2, i4, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i9 = i5 + 8 | 0;
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   HEAP32[i9 >> 2] = 0;
  }
  i9 = i5 | 0;
  i4 = HEAP32[i9 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i9 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i5 | 0;
 if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i3 = i3 + 8 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmNS1_10PassOwnPtrINS_31CrossThreadResourceResponseDataEEES9_E11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i7 = i4 | 0;
 i8 = i1 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i9;
 i9 = HEAP32[i1 + 12 >> 2] | 0;
 i8 = i5 | 0;
 i10 = i1 + 16 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i8 >> 2] = i1;
 FUNCTION_TABLE_viiii[i6 & 3](i2, i4, i9, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore35CrossThreadResourceResponseDataBaseD2Ev(i5 | 0);
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i5 | 0;
 if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL35workerGlobalScopeDidReceiveResponseEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEEmNS2_10PassOwnPtrINS_31CrossThreadResourceResponseDataEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i1 | 0;
 i6 = i1 + 8 | 0;
 i7 = i6 | 0;
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i4;
 __ZN7WebCore20ResourceResponseBase5adoptEN3WTF10PassOwnPtrINS_31CrossThreadResourceResponseDataEEE(i5, i6);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore35CrossThreadResourceResponseDataBaseD2Ev(i6 | 0);
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6, i3, i5);
 }
 if ((i5 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 __ZN7WebCore20ResourceResponseBaseD2Ev(i5 | 0);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge11didSendDataEyy(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i1 + 12 >> 2] | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] | 0;
 i10 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i11 = i10 | 0;
  tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue + 1, tempValue;
 }
 i11 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i11 >> 2] = H_BASE + 152;
 HEAP32[i11 + 4 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[i11 + 8 >> 2] = i10;
 i10 = i11 + 16 | 0;
 HEAP32[i10 >> 2] = i2;
 HEAP32[i10 + 4 >> 2] = i3;
 i3 = i11 + 24 | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP32[i3 + 4 >> 2] = i5;
 i5 = i7 | 0;
 HEAP32[i5 >> 2] = i11;
 FUNCTION_TABLE_iiii[i9 & 1](i8, i7, i1 + 16 | 0) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore16CrossThreadTask4IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_N3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES7_NS_23ThreadableLoaderOptionsES8_NS4_6StringERKS9_ED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 120;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore23ThreadableLoaderOptionsD1Ev(i1 + 16 | 0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i5);
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 __ZN7WebCore30CrossThreadResourceRequestDataD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i5 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i5);
 i6 = i1;
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge16didFinishLoadingEmd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] | 0;
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue + 1, tempValue;
 }
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 >> 2] = H_BASE + 184;
 HEAP32[i9 + 4 >> 2] = F_BASE_viiid + 2;
 HEAP32[i9 + 8 >> 2] = i8;
 HEAP32[i9 + 12 >> 2] = i2;
 HEAPF64[i9 + 16 >> 3] = d3;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = i9;
 FUNCTION_TABLE_iiii[i7 & 1](i6, i5, i1 + 16 | 0) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS1_10PassOwnPtrINS1_6VectorIcLj0ENS1_15CrashOnOverflowEEEEESB_ED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 312;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 8 | 0;
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
  }
  i3 = i2 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i2 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore16CrossThreadTask4IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_N3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES7_NS_23ThreadableLoaderOptionsES8_NS4_6StringERKS9_ED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 120;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore23ThreadableLoaderOptionsD1Ev(i1 + 16 | 0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i5);
  return;
 }
 __ZN7WebCore30CrossThreadResourceRequestDataD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i5 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i5);
 return;
}
function __ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEyyyyE11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = i4 | 0;
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i8;
 i8 = i1 + 16 | 0;
 i7 = i1 + 24 | 0;
 FUNCTION_TABLE_viiiiii[i5 & 7](i2, i4, HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0, HEAP32[i7 >> 2] | 0, HEAP32[i7 + 4 >> 2] | 0);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i7 | 0;
 if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS1_10PassOwnPtrINS1_6VectorIcLj0ENS1_15CrashOnOverflowEEEEESB_ED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 312;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 8 | 0;
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
  }
  i3 = i2 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i2 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridgeD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 63](i2);
 i5 = i1;
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge20didFailRedirectCheckEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue + 1, tempValue;
 }
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = H_BASE + 376;
 HEAP32[i7 + 4 >> 2] = F_BASE_vii + 2;
 HEAP32[i7 + 8 >> 2] = i6;
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i7;
 FUNCTION_TABLE_iiii[i5 & 1](i4, i3, i1 + 16 | 0) | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13ResourceErrorD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmddE11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = i4 | 0;
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i8;
 FUNCTION_TABLE_viiid[i5 & 3](i2, i4, HEAP32[i1 + 12 >> 2] | 0, +HEAPF64[i1 + 16 >> 3]);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge25didFailAccessControlCheckERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0;
 __ZN7WebCore18createCallbackTaskIN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEENS1_10PassRefPtrIS3_EENS_13ResourceErrorERKS7_EENS1_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPSB_T0_T2_ERKT_RKT1_(i4, F_BASE_viii + 6 | 0, i1 + 8 | 0, i2);
 FUNCTION_TABLE_iiii[i6 & 1](i5, i4, i1 + 16 | 0) | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridgeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 63](i2);
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridgeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 63](i2);
 return;
}
function __ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS_13ResourceErrorERKS7_E11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = i4 | 0;
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i8;
 FUNCTION_TABLE_viii[i5 & 15](i2, i4, i1 + 12 | 0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEES4_NS_13ResourceErrorERKS5_E11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = i4 | 0;
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i8;
 FUNCTION_TABLE_viii[i5 & 15](i2, i4, i1 + 12 | 0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge7didFailERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0;
 __ZN7WebCore18createCallbackTaskIN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEES4_NS_13ResourceErrorERKS5_EENS1_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPS9_T0_T2_ERKT_RKT1_(i4, F_BASE_viii + 2 | 0, i1 + 8 | 0, i2);
 FUNCTION_TABLE_iiii[i6 & 1](i5, i4, i1 + 16 | 0) | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16CrossThreadTask1IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEE11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = i4 | 0;
 i7 = i1 + 8 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i1;
 FUNCTION_TABLE_vii[i5 & 31](i2, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 | 0;
 if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge7destroyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP8[i4 + 8 | 0] = 1;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i6 >> 2] = H_BASE + 344;
 HEAP32[i6 + 4 >> 2] = F_BASE_vii + 8;
 HEAP32[i6 + 8 >> 2] = i1;
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = i6;
 FUNCTION_TABLE_vii[i5 & 31](i4, i3);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmNS1_10PassOwnPtrINS_31CrossThreadResourceResponseDataEEES9_ED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore35CrossThreadResourceResponseDataBaseD2Ev(i2 | 0);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmNS1_10PassOwnPtrINS_31CrossThreadResourceResponseDataEEES9_ED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore35CrossThreadResourceResponseDataBaseD2Ev(i2 | 0);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS_13ResourceErrorERKS7_ED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 280;
 __ZN7WebCore13ResourceErrorD1Ev(i1 + 12 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEES4_NS_13ResourceErrorERKS5_ED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 248;
 __ZN7WebCore13ResourceErrorD1Ev(i1 + 12 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function __ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEyyyyED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 152;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmddED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore16CrossThreadTask1IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEyyyyED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 152;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmddED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore16CrossThreadTask1IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCoreL31workerGlobalScopeDidReceiveDataEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEENS2_10PassOwnPtrINS2_6VectorIcLj0ENS2_15CrashOnOverflowEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 15](i3, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0);
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge16mainThreadCancelEPNS_22ScriptExecutionContextEPS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = i2 + 4 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[HEAP32[i2 >> 2] >> 2] & 63](i2);
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 63](i2);
 return;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZN7WebCoreL42workerGlobalScopeDidFailAccessControlCheckEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEERKNS_13ResourceErrorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP8[i1 + 8 | 0] = 1;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 31](i2, i3);
 return;
}
function __ZN7WebCoreL28workerGlobalScopeDidSendDataEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEEyy(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viiiii[HEAP32[HEAP32[i1 >> 2] >> 2] & 7](i1, i3, i4, i5, i6);
 return;
}
function __ZN7WebCoreL33workerGlobalScopeDidFinishLoadingEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEEmd(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP8[i1 + 8 | 0] = 1;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viid[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 3](i2, i3, d4);
 return;
}
function __ZN7WebCoreL24workerGlobalScopeDidFailEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEERKNS_13ResourceErrorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP8[i1 + 8 | 0] = 1;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 31](i2, i3);
 return;
}
function __ZN7WebCoreL37workerGlobalScopeDidFailRedirectCheckEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP8[i1 + 8 | 0] = 1;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 63](i2);
 return;
}
function __ZN7WebCore22WorkerThreadableLoader21derefThreadableLoaderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i3);
 return;
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge17mainThreadDestroyEPNS_22ScriptExecutionContextEPS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 63](i2);
 return;
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function __ZN7WebCore16CrossThreadTask1IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_E11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[i1 + 4 >> 2] & 31](i2, HEAP32[i1 + 8 >> 2] | 0);
 return;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge18clearClientWrapperEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP8[i2 + 8 | 0] = 1;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore16CrossThreadTask1IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_ED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore16CrossThreadTask1IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_ED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore22WorkerThreadableLoader6cancelEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22WorkerThreadableLoader16MainThreadBridge6cancelEv(HEAP32[i1 + 16 >> 2] | 0);
 return;
}
function __ZN7WebCore22WorkerThreadableLoader19refThreadableLoaderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 4 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function dynCall_viiid(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 FUNCTION_TABLE_viiid[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore22WorkerThreadableLoaderD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22WorkerThreadableLoaderD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function b1(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(1);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_viid(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viid[i1 & 3](i2 | 0, i3 | 0, +d4);
}
function b10(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(10);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function b2(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(2);
}
function __ZN7WebCore22ThreadableLoaderClient32isDocumentThreadableLoaderClientEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b12(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(12);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function b6(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 abort(6);
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
 return 0;
}
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
}
function b9(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(9);
}
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b8() {
 abort(8);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZN7WebCore22ThreadableLoaderClient32isDocumentThreadableLoaderClientEv,b0,__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiii = [b1,b1,__ZN7WebCore22WorkerThreadableLoader16MainThreadBridgeC2EN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEERNS_17WorkerLoaderProxyERKNS2_6StringERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsESA_,b1];
  var FUNCTION_TABLE_viiiii = [b2,b2,__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge22mainThreadCreateLoaderEPNS_22ScriptExecutionContextEPS1_N3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEENS_23ThreadableLoaderOptionsERKNS5_6StringE,b2,__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge11didSendDataEyy,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore22WorkerThreadableLoader16MainThreadBridgeD0Ev,b3,__ZN7WebCore22WorkerThreadableLoaderD0Ev,b3,__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmNS1_10PassOwnPtrINS_31CrossThreadResourceResponseDataEEES9_ED1Ev,b3,__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEES4_NS_13ResourceErrorERKS5_ED1Ev,b3,__ZN7WebCore22WorkerThreadableLoaderD2Ev,b3,__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmNS1_10PassOwnPtrINS_31CrossThreadResourceResponseDataEEES9_ED0Ev,b3,__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEyyyyED1Ev,b3,__ZN7WebCore16CrossThreadTask4IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_N3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES7_NS_23ThreadableLoaderOptionsES8_NS4_6StringERKS9_ED1Ev,b3,__ZN7WebCore22WorkerThreadableLoader21derefThreadableLoaderEv,b3,__ZN7WebCore16CrossThreadTask1IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_ED1Ev,b3,__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEyyyyED0Ev,b3,__ZN7WebCore22WorkerThreadableLoader6cancelEv,b3,__ZN7WebCore16CrossThreadTask4IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_N3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES7_NS_23ThreadableLoaderOptionsES8_NS4_6StringERKS9_ED0Ev,b3,__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge20didFailRedirectCheckEv
  ,b3,__ZN7WebCore16CrossThreadTask1IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEED1Ev,b3,__ZN7WebCore16CrossThreadTask1IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEED0Ev,b3,__ZN7WebCore22WorkerThreadableLoader19refThreadableLoaderEv,b3,__ZN7WebCore16CrossThreadTask1IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_ED0Ev,b3,__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS1_10PassOwnPtrINS1_6VectorIcLj0ENS1_15CrashOnOverflowEEEEESB_ED1Ev,b3,__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS1_10PassOwnPtrINS1_6VectorIcLj0ENS1_15CrashOnOverflowEEEEESB_ED0Ev,b3,__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS_13ResourceErrorERKS7_ED0Ev,b3,__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEES4_NS_13ResourceErrorERKS5_ED0Ev,b3,__ZN7WebCore22WorkerThreadableLoader16MainThreadBridgeD2Ev,b3,__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmddED1Ev,b3,__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS_13ResourceErrorERKS7_ED1Ev,b3,__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmddED0Ev,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZN7WebCoreL37workerGlobalScopeDidFailRedirectCheckEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEE,b4,__ZN7WebCore16CrossThreadTask1IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEE11performTaskEPNS_22ScriptExecutionContextE,b4,__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge16mainThreadCancelEPNS_22ScriptExecutionContextEPS1_,b4,__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge17mainThreadDestroyEPNS_22ScriptExecutionContextEPS1_,b4,__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge25didFailAccessControlCheckERKNS_13ResourceErrorE,b4,__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS1_10PassOwnPtrINS1_6VectorIcLj0ENS1_15CrashOnOverflowEEEEESB_E11performTaskEPNS_22ScriptExecutionContextE,b4,__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmNS1_10PassOwnPtrINS_31CrossThreadResourceResponseDataEEES9_E11performTaskEPNS_22ScriptExecutionContextE,b4,__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEES4_NS_13ResourceErrorERKS5_E11performTaskEPNS_22ScriptExecutionContextE,b4,__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEyyyyE11performTaskEPNS_22ScriptExecutionContextE,b4,__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS_13ResourceErrorERKS7_E11performTaskEPNS_22ScriptExecutionContextE,b4,__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmddE11performTaskEPNS_22ScriptExecutionContextE,b4,__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge7didFailERKNS_13ResourceErrorE,b4,__ZN7WebCore16CrossThreadTask1IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_E11performTaskEPNS_22ScriptExecutionContextE,b4,__ZN7WebCore16CrossThreadTask4IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_N3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES7_NS_23ThreadableLoaderOptionsES8_NS4_6StringERKS9_E11performTaskEPNS_22ScriptExecutionContextE
  ,b4,b4,b4];
  var FUNCTION_TABLE_iiii = [b5,b5];
  var FUNCTION_TABLE_viiid = [b6,b6,__ZN7WebCoreL33workerGlobalScopeDidFinishLoadingEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEEmd,b6];
  var FUNCTION_TABLE_viii = [b7,b7,__ZN7WebCoreL24workerGlobalScopeDidFailEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEERKNS_13ResourceErrorE,b7,__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge18didReceiveResponseEmRKNS_16ResourceResponseE,b7,__ZN7WebCoreL42workerGlobalScopeDidFailAccessControlCheckEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEERKNS_13ResourceErrorE,b7,__ZN7WebCoreL31workerGlobalScopeDidReceiveDataEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEENS2_10PassOwnPtrINS2_6VectorIcLj0ENS2_15CrashOnOverflowEEEEE,b7,__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge14didReceiveDataEPKci,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_v = [b8,b8];
  var FUNCTION_TABLE_viid = [b9,b9,__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge16didFinishLoadingEmd,b9];
  var FUNCTION_TABLE_viiiiii = [b10,b10,__ZN7WebCoreL28workerGlobalScopeDidSendDataEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEEyy,b10,__ZN7WebCore22WorkerThreadableLoaderC2EPNS_17WorkerGlobalScopeEPNS_22ThreadableLoaderClientERKN3WTF6StringERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsE,b10,b10,b10];
  var FUNCTION_TABLE_iii = [b11,b11];
  var FUNCTION_TABLE_viiii = [b12,b12,__ZN7WebCoreL35workerGlobalScopeDidReceiveResponseEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEEmNS2_10PassOwnPtrINS_31CrossThreadResourceResponseDataEEE,b12];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viiid: dynCall_viiid, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viid: dynCall_viid, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viiid": invoke_viiid, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viid": invoke_viid, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiid = Module["dynCall_viiid"] = asm["dynCall_viiid"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viid = Module["dynCall_viid"] = asm["dynCall_viid"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore22WorkerThreadableLoader16MainThreadBridgeD0Ev","__ZN7WebCore22WorkerThreadableLoaderD0Ev","__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS1_10PassOwnPtrINS1_6VectorIcLj0ENS1_15CrashOnOverflowEEEEESB_E11performTaskEPNS_22ScriptExecutionContextE","__ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev","__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmNS1_10PassOwnPtrINS_31CrossThreadResourceResponseDataEEES9_ED1Ev","__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEES4_NS_13ResourceErrorERKS5_ED0Ev","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge18didReceiveResponseEmRKNS_16ResourceResponseE","__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEES4_NS_13ResourceErrorERKS5_ED1Ev","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge18clearClientWrapperEv","__ZN7WebCore22WorkerThreadableLoaderD2Ev","__ZN7WebCore16CrossThreadTask1IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEE11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmNS1_10PassOwnPtrINS_31CrossThreadResourceResponseDataEEES9_ED0Ev","__ZN7WebCoreL28workerGlobalScopeDidSendDataEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEEyy","__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEyyyyE11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge16mainThreadCancelEPNS_22ScriptExecutionContextEPS1_","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge17mainThreadDestroyEPNS_22ScriptExecutionContextEPS1_","__ZN7WebCoreL42workerGlobalScopeDidFailAccessControlCheckEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEERKNS_13ResourceErrorE","__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS1_10PassOwnPtrINS1_6VectorIcLj0ENS1_15CrashOnOverflowEEEEESB_ED1Ev","__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEyyyyED1Ev","__ZN7WebCore20ResourceResponseBaseD2Ev","__ZN7WebCore16CrossThreadTask4IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_N3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES7_NS_23ThreadableLoaderOptionsES8_NS4_6StringERKS9_ED1Ev","__ZN7WebCore22WorkerThreadableLoader21derefThreadableLoaderEv","__ZN7WebCore16CrossThreadTask1IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_ED1Ev","__ZN7WebCore16CrossThreadTask1IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEED1Ev","__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEyyyyED0Ev","__ZN7WebCore22WorkerThreadableLoader6cancelEv","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge16didFinishLoadingEmd","__ZN7WebCoreL33workerGlobalScopeDidFinishLoadingEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEEmd","__ZN7WebCore18createCallbackTaskIN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEES4_NS_13ResourceErrorERKS5_EENS1_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPS9_T0_T2_ERKT_RKT1_","__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmddED0Ev","__ZN7WebCore16CrossThreadTask1IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_ED0Ev","__ZN7WebCore13ResourceErrorD1Ev","__ZN7WebCore22WorkerThreadableLoader25loadResourceSynchronouslyEPNS_17WorkerGlobalScopeERKNS_15ResourceRequestERNS_22ThreadableLoaderClientERKNS_23ThreadableLoaderOptionsE","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge20didFailRedirectCheckEv","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge7destroyEv","_memset","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge22mainThreadCreateLoaderEPNS_22ScriptExecutionContextEPS1_N3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEENS_23ThreadableLoaderOptionsERKNS5_6StringE","__ZN7WebCoreL35workerGlobalScopeDidReceiveResponseEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEEmNS2_10PassOwnPtrINS_31CrossThreadResourceResponseDataEEE","__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmNS1_10PassOwnPtrINS_31CrossThreadResourceResponseDataEEES9_E11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEES4_NS_13ResourceErrorERKS5_E11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCoreL24workerGlobalScopeDidFailEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEERKNS_13ResourceErrorE","__ZN7WebCore18createCallbackTaskINS_29AllowCrossThreadAccessWrapperINS_22WorkerThreadableLoader16MainThreadBridgeEEEPS3_NS_15ResourceRequestEN3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEENS_23ThreadableLoaderOptionsESB_NS7_6StringERKSC_EENS8_INS_22ScriptExecutionContext4TaskEEEPFvPSF_T0_T2_T4_T6_ERKT_RKT1_RKT3_RKT5_","__ZN7WebCore34CrossThreadResourceRequestDataBaseD2Ev","__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS_13ResourceErrorERKS7_E11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore16CrossThreadTask1IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEED0Ev","__ZN7WebCore22WorkerThreadableLoader19refThreadableLoaderEv","__ZN7WebCoreL31workerGlobalScopeDidReceiveDataEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEENS2_10PassOwnPtrINS2_6VectorIcLj0ENS2_15CrashOnOverflowEEEEE","__ZN7WebCore35CrossThreadResourceResponseDataBaseD2Ev","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge25didFailAccessControlCheckERKNS_13ResourceErrorE","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge6cancelEv","__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmddE11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS1_10PassOwnPtrINS1_6VectorIcLj0ENS1_15CrashOnOverflowEEEEESB_ED0Ev","__ZN7WebCore19ResourceRequestBaseD2Ev","_strlen","__ZN7WebCore16CrossThreadTask4IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_N3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES7_NS_23ThreadableLoaderOptionsES8_NS4_6StringERKS9_ED0Ev","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge14didReceiveDataEPKci","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridgeC2EN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEERNS_17WorkerLoaderProxyERKNS2_6StringERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsESA_","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge7didFailERKNS_13ResourceErrorE","__ZN7WebCore18createCallbackTaskIN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEENS1_10PassRefPtrIS3_EENS_13ResourceErrorERKS7_EENS1_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPSB_T0_T2_ERKT_RKT1_","__ZN7WebCore30CrossThreadResourceRequestDataD2Ev","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridge11didSendDataEyy","__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS_13ResourceErrorERKS7_ED0Ev","_memcpy","__ZN7WebCoreL37workerGlobalScopeDidFailRedirectCheckEPNS_22ScriptExecutionContextEN3WTF6RefPtrINS_29ThreadableLoaderClientWrapperEEE","__ZN7WebCore22WorkerThreadableLoader16MainThreadBridgeD2Ev","__ZN7WebCore16CrossThreadTask3IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EEmmddED1Ev","__ZN7WebCore22WorkerThreadableLoaderC2EPNS_17WorkerGlobalScopeEPNS_22ThreadableLoaderClientERKN3WTF6StringERKNS_15ResourceRequestERKNS_23ThreadableLoaderOptionsE","__ZN7WebCore16CrossThreadTask2IN3WTF10PassRefPtrINS_29ThreadableLoaderClientWrapperEEENS1_6RefPtrIS3_EENS_13ResourceErrorERKS7_ED1Ev","__ZN7WebCore22ThreadableLoaderClient32isDocumentThreadableLoaderClientEv","__ZN7WebCore16CrossThreadTask1IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_E11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore16CrossThreadTask4IPNS_22WorkerThreadableLoader16MainThreadBridgeES3_N3WTF10PassOwnPtrINS_30CrossThreadResourceRequestDataEEES7_NS_23ThreadableLoaderOptionsES8_NS4_6StringERKS9_E11performTaskEPNS_22ScriptExecutionContextE"]
