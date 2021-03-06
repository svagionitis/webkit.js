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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14DocumentWriterC1EPNS_5FrameE;
/* no memory initializer */
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14DocumentWriter5beginERKNS_3URLEbPNS_8DocumentE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i6 = i5 | 0;
 i7 = i5 + 48 | 0;
 i8 = i5 + 56 | 0;
 i9 = i5 + 64 | 0;
 i10 = i5 + 72 | 0;
 i11 = i5 + 80 | 0;
 i12 = i6 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 HEAP32[i12 >> 2] = i13;
 if ((i13 | 0) == 0) {
  i14 = 0;
  i15 = i6 + 4 | 0;
 } else {
  i16 = i13 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
  i16 = i6 + 4 | 0;
  i14 = HEAP8[i16] & -4;
  i15 = i16;
 }
 i16 = HEAP8[i2 + 4 | 0] | 0;
 HEAP8[i15] = i14 | i16 & 1 | i16 & 2;
 HEAP32[i6 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i6 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i6 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i6 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i6 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i6 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i6 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i6 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i6 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 __ZN7WebCore14DocumentWriter14createDocumentERKNS_3URLE(i7, i1, i6);
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((HEAP8[i7 + 1576 | 0] & 8) == 0) {
   i17 = i7;
  } else {
   if ((HEAP32[i7 + 96 >> 2] & 2 | 0) == 0) {
    i17 = i7;
    break;
   }
   i2 = HEAP32[i1 >> 2] | 0;
   i16 = __ZN3WTF10fastMallocEj(2336) | 0;
   __ZN7WebCore12SinkDocumentC1EPNS_5FrameERKNS_3URLE(i16, i2, i6);
   i2 = i16;
   if ((i7 | 0) == 0) {
    i17 = i2;
    break;
   }
   i16 = i7 + 8 | 0;
   i14 = i16 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    i17 = i2;
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    i17 = i2;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
   i17 = i2;
  }
 } while (0);
 i7 = i1 | 0;
 do {
  if (__ZNK7WebCore23FrameLoaderStateMachine32isDisplayingInitialEmptyDocumentEv((HEAP32[i7 >> 2] | 0) + 104 | 0) | 0) {
   if (!(__ZNK7WebCore15SecurityContext20isSecureTransitionToERKNS_3URLE((HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0) + 88 | 0, i6) | 0)) {
    i18 = 13;
    break;
   }
   __ZN7WebCore8Document17takeDOMWindowFromEPS0_(i17, HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0);
   i19 = 1;
  } else {
   i18 = 13;
  }
 } while (0);
 if ((i18 | 0) == 13) {
  __ZN7WebCore8Document15createDOMWindowEv(i17);
  i19 = 0;
 }
 i18 = i19 ^ 1;
 __ZN7WebCore11FrameLoader5clearEPNS_8DocumentEbbb((HEAP32[i7 >> 2] | 0) + 80 | 0, i17, i18, i18, 1);
 i18 = i1 + 20 | 0;
 i2 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i16 = i2 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i16 >> 2] = i15;
    break;
   }
  }
 } while (0);
 HEAP8[i1 + 4 | 0] = 0;
 do {
  if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
   i2 = i1 + 16 | 0;
   i15 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i2 = i15 | 0;
   i16 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i2 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if (!i19) {
  __ZN7WebCore16ScriptController27updatePlatformScriptObjectsEv(HEAP32[(HEAP32[i7 >> 2] | 0) + 460 >> 2] | 0);
 }
 __ZN7WebCore11FrameLoader19setOutgoingReferrerERKNS_3URLE((HEAP32[i7 >> 2] | 0) + 80 | 0, i6);
 i6 = HEAP32[i7 >> 2] | 0;
 i19 = i8 | 0;
 HEAP32[i19 >> 2] = i17;
 i16 = (i17 | 0) == 0;
 if (!i16) {
  i2 = i17 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Frame11setDocumentEN3WTF10PassRefPtrINS_8DocumentEEE(i6, i8);
 i8 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i19 = i8 + 8 | 0;
   i6 = i19 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i18 = i9 | 0;
   HEAP32[i18 >> 2] = i8;
   i19 = i8 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   __ZN7WebCore8Document10setDecoderEN3WTF10PassRefPtrINS_19TextResourceDecoderEEE(i17, i9);
   i19 = HEAP32[i18 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i18 = i19 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i19);
    __ZN3WTF8fastFreeEPv(i19);
    break;
   } else {
    HEAP32[i18 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if ((i4 | 0) != 0) {
   i9 = HEAP32[i4 + 548 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i8 = i9 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = i17 + 548 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i9;
   do {
    if ((i2 | 0) != 0) {
     i9 = i2 | 0;
     i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i9 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i2 = i4 + 552 | 0;
   i8 = i17 + 552 | 0;
   i9 = HEAP8[i8] & -2 | HEAP8[i2] & 1;
   HEAP8[i8] = i9;
   HEAP8[i8] = i9 & -3 | HEAP8[i2] & 2;
   HEAP32[i17 + 556 >> 2] = HEAP32[i4 + 556 >> 2];
   HEAP32[i17 + 560 >> 2] = HEAP32[i4 + 560 >> 2];
   HEAP32[i17 + 564 >> 2] = HEAP32[i4 + 564 >> 2];
   HEAP32[i17 + 568 >> 2] = HEAP32[i4 + 568 >> 2];
   HEAP32[i17 + 572 >> 2] = HEAP32[i4 + 572 >> 2];
   HEAP32[i17 + 576 >> 2] = HEAP32[i4 + 576 >> 2];
   HEAP32[i17 + 580 >> 2] = HEAP32[i4 + 580 >> 2];
   HEAP32[i17 + 584 >> 2] = HEAP32[i4 + 584 >> 2];
   HEAP32[i17 + 588 >> 2] = HEAP32[i4 + 588 >> 2];
   HEAP32[i17 + 592 >> 2] = HEAP32[i4 + 592 >> 2];
   i2 = HEAP32[i4 + 100 >> 2] | 0;
   i9 = i10 | 0;
   HEAP32[i9 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i8 = i2 | 0;
    tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue + 1, tempValue;
   }
   __ZN7WebCore15SecurityContext17setSecurityOriginEN3WTF10PassRefPtrINS_14SecurityOriginEEE(i17 + 88 | 0, i10);
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 __ZN7WebCore11FrameLoader16didBeginDocumentEb((HEAP32[i7 >> 2] | 0) + 80 | 0, i3);
 __ZN7WebCore8Document12implicitOpenEv(i17);
 i3 = HEAP32[i17 + 344 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i10 = i3 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = i1 + 24 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
   i10 = i3 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i10 >> 2] = i8;
    break;
   }
   i8 = i3 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP32[i4 + 452 >> 2] | 0) != 0) {
   i8 = HEAP32[i4 + 84 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[HEAP32[i8 >> 2] >> 2] & 1](i8) | 0)) {
    break;
   }
   i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 452 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i11 + 4 >> 2] = 0;
   __ZN7WebCore9FrameView15setContentsSizeERKNS_7IntSizeE(i8, i11);
  }
 } while (0);
 HEAP32[i1 + 28 >> 2] = 1;
 do {
  if (!i16) {
   i1 = i17 + 8 | 0;
   i11 = i1 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 i17 = HEAP32[i12 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i12 = i17 | 0;
 i16 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i16 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i17);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i12 >> 2] = i16;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore14DocumentWriter21createDecoderIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i1 + 20 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  i9 = HEAP32[i8 >> 2] | 0;
  STACKTOP = i2;
  return i9 | 0;
 }
 i10 = i1 | 0;
 __ZN7WebCore12TextEncodingC1ERKN3WTF6StringE(i3, (HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] | 0) + 88 | 0);
 i11 = (HEAP8[(HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] | 0) + 193 | 0] & 1) != 0;
 i12 = __ZN3WTF10fastMallocEj(52) | 0;
 __ZN7WebCore19TextResourceDecoderC1ERKN3WTF6StringERKNS_12TextEncodingEb(i12, i1 + 8 | 0, i3, i11);
 i11 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i12;
 do {
  if ((i11 | 0) != 0) {
   i12 = i11 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i12 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i11 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i10 >> 2] | 0) + 40 | 0) | 0;
 i3 = (i11 | 0) == 0;
 do {
  if (!i3) {
   i12 = i11 + 456 | 0;
   if (!(__ZNK7WebCore14SecurityOrigin9canAccessEPKS0_(HEAP32[(HEAP32[i12 >> 2] | 0) + 100 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0) + 100 >> 2] | 0) | 0)) {
    break;
   }
   i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 1308 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   if ((HEAP32[i13 + 20 >> 2] | 0) != 1) {
    break;
   }
   HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] = HEAP32[i13 + 8 >> 2];
  }
 } while (0);
 i13 = i1 + 16 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i14 = 13;
  } else {
   if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
    i14 = 13;
    break;
   }
   i15 = HEAP32[i8 >> 2] | 0;
   __ZN7WebCore12TextEncodingC1ERKN3WTF6StringE(i6, i13);
   __ZN7WebCore19TextResourceDecoder11setEncodingERKNS_12TextEncodingENS0_14EncodingSourceE(i15, i6, (HEAP8[i1 + 12 | 0] & 1) != 0 ? 6 : 5);
  }
 } while (0);
 do {
  if ((i14 | 0) == 13) {
   if (i3) {
    break;
   }
   i1 = i11 + 456 | 0;
   if (!(__ZNK7WebCore14SecurityOrigin9canAccessEPKS0_(HEAP32[(HEAP32[i1 >> 2] | 0) + 100 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0) + 100 >> 2] | 0) | 0)) {
    break;
   }
   i6 = HEAP32[i8 >> 2] | 0;
   __ZNK7WebCore8Document8encodingEv(i5, HEAP32[i1 >> 2] | 0);
   __ZN7WebCore12TextEncodingC1ERKN3WTF6StringE(i4, i5);
   __ZN7WebCore19TextResourceDecoder11setEncodingERKNS_12TextEncodingENS0_14EncodingSourceE(i6, i4, 7);
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i1 = i6 | 0;
   i13 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i1 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 i4 = i7 | 0;
 HEAP32[i4 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i11 = i10 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 __ZN7WebCore8Document10setDecoderEN3WTF10PassRefPtrINS_19TextResourceDecoderEEE(i5, i7);
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i9 = HEAP32[i8 >> 2] | 0;
  STACKTOP = i2;
  return i9 | 0;
 }
 i4 = i7 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore19TextResourceDecoderD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  i9 = HEAP32[i8 >> 2] | 0;
  STACKTOP = i2;
  return i9 | 0;
 } else {
  HEAP32[i4 >> 2] = i5;
  i9 = HEAP32[i8 >> 2] | 0;
  STACKTOP = i2;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore14DocumentWriter15replaceDocumentERKN3WTF6StringEPNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 __ZN7WebCore11FrameLoader14stopAllLoadersENS_26ClearProvisionalItemPolicyE((HEAP32[i6 >> 2] | 0) + 80 | 0, 0);
 __ZN7WebCore14DocumentWriter5beginERKNS_3URLEbPNS_8DocumentE(i1, (HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0) + 356 | 0, 1, i3);
 i3 = i2 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   i2 = i1 + 4 | 0;
   if ((HEAP8[i2] & 1) == 0) {
    HEAP8[i2] = 1;
    __ZN7WebCore8Document20setCompatibilityModeENS0_17CompatibilityModeE(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0, 2);
   }
   i2 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0) + 344 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 1](i2);
   i7 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i5 | 0;
   HEAP32[i9 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i10 = i8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   FUNCTION_TABLE_vii[i7 & 3](i2, i5);
   i2 = HEAP32[i9 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i9 = i2 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i9 >> 2] = i7;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 28 >> 2] = 2;
 i5 = HEAP32[i6 >> 2] | 0;
 i6 = i5 + 4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i1 + 24 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 3](i3, i1);
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] & 1](i7);
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i9 = i7 + 4 | 0;
   i7 = i9 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i9 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i6 = i5 + 4 | 0;
 i5 = i6 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i6 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14DocumentWriter3endEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 + 28 >> 2] = 2;
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = i2 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 3](i4, i1);
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] & 1](i5);
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i3 = i2 + 4 | 0;
 i2 = i3 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
 return;
}
function __ZN7WebCore14DocumentWriter14createDocumentERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i2 | 0;
 do {
  if (!(__ZNK7WebCore23FrameLoaderStateMachine32isDisplayingInitialEmptyDocumentEv((HEAP32[i4 >> 2] | 0) + 104 | 0) | 0)) {
   i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 464 >> 2] & 1](i5, i2 + 8 | 0) | 0)) {
    break;
   }
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = __ZN3WTF10fastMallocEj(2344) | 0;
   __ZN7WebCore14PluginDocumentC1EPNS_5FrameERKNS_3URLE(i6, i5, i3);
   HEAP32[i1 >> 2] = i6;
   return;
  }
 } while (0);
 i6 = HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[HEAP32[i6 >> 2] >> 2] & 1](i6) | 0) {
  i6 = HEAP32[i4 >> 2] | 0;
  __ZN7WebCore17DOMImplementation14createDocumentERKN3WTF6StringEPNS_5FrameERKNS_3URLEb(i1, i2 + 8 | 0, i6, i3, (HEAP8[i6 + 488 | 0] & 1) != 0);
  return;
 } else {
  i6 = HEAP32[i4 >> 2] | 0;
  i4 = __Znwj(2288) | 0;
  __ZN7WebCore8DocumentC1EPNS_5FrameERKNS_3URLEjj(i4, i6, i3, 0, 2);
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
function __ZN7WebCore14DocumentWriter5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP8[i1 + 4 | 0] = 0;
 if ((HEAP8[i1 + 12 | 0] & 1) != 0) {
  return;
 }
 i3 = i1 + 16 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i3 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore14DocumentWriter11setEncodingERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 16 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP8[i1 + 12 | 0] = i3 & 1;
 return;
}
function __ZN7WebCore14DocumentWriter5beginEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 __ZN7WebCore14DocumentWriter5beginERKNS_3URLEbPNS_8DocumentE(i1, i3, 1, 0);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
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
function __ZN7WebCore14DocumentWriter18reportDataReceivedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 4 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 i2 = i1 | 0;
 if (__ZNK7WebCore12TextEncoding18usesVisualOrderingEv((HEAP32[i1 + 20 >> 2] | 0) + 8 | 0) | 0) {
  __ZN7WebCore8Document18setVisuallyOrderedEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0);
 }
 __ZN7WebCore8Document11recalcStyleENS_5Style6ChangeE(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0, 4);
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
function __ZN7WebCore14DocumentWriter7addDataEPKcj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else if ((i4 | 0) == 2) {
  _WTFCrash();
 } else {
  i4 = HEAP32[i1 + 24 >> 2] | 0;
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 1](i4, i1, i2, i3);
  return;
 }
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore14DocumentWriterC2EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP8[i1 + 12 | 0] = 0;
 _memset(i1 + 16 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore14DocumentWriterC1EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP8[i1 + 12 | 0] = 0;
 _memset(i1 + 16 | 0, 0, 16) | 0;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore14DocumentWriter38setDocumentWasLoadedAsPartOfNavigationEv(i1) {
 i1 = i1 | 0;
 HEAP8[(HEAP32[i1 + 24 >> 2] | 0) + 12 | 0] = 1;
 return;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
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
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore14DocumentWriterC2EPNS_5FrameE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  var FUNCTION_TABLE_viiii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore14DocumentWriter7addDataEPKcj","__ZN7WebCore14DocumentWriter38setDocumentWasLoadedAsPartOfNavigationEv","__ZN7WebCore14DocumentWriter21createDecoderIfNeededEv","__ZN7WebCore14DocumentWriter3endEv","__ZN7WebCore14DocumentWriter5beginERKNS_3URLEbPNS_8DocumentE","__ZN7WebCore14DocumentWriter5beginEv","__ZN7WebCore14DocumentWriter15replaceDocumentERKN3WTF6StringEPNS_8DocumentE","__ZN7WebCore14DocumentWriterC2EPNS_5FrameE","_memset","__ZN7WebCore14DocumentWriter5clearEv","__ZN7WebCore14DocumentWriter11setEncodingERKN3WTF6StringEb","_memcpy","__ZN7WebCore14DocumentWriter18reportDataReceivedEv","__ZN7WebCore14DocumentWriter14createDocumentERKNS_3URLE","__ZN7WebCore14SecurityOriginD2Ev"]
