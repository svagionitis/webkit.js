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
H_BASE = parentModule["_malloc"](96 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 96;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore19CSSCursorImageValueC1EN3WTF7PassRefINS_8CSSValueEEEbRKNS_8IntPointE;
var __ZN7WebCore19CSSCursorImageValueD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viiif(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiif"](index,a1,a2,a3,a4);
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
function invoke_fi(index,a1) {
  try {
    return Module["dynCall_fi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiif(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiif"](index,a1,a2,a3);
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
  var __ZN7WebCore8SVGNames9cursorTagE=env.__ZN7WebCore8SVGNames9cursorTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore17StylePendingImageE=(H_BASE+8)|0;
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
  var invoke_viiif=env.invoke_viiif;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_iiif=env.invoke_iiif;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore19CSSCursorImageValue23updateIfSVGCursorIsUsedEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 96 | 0;
 i10 = i3 + 144 | 0;
 i11 = i3 + 152 | 0;
 if ((i2 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 32 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i13 = i1 + 8 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((HEAP32[i14 + 4 >> 2] & 516096 | 0) != 8192) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i7, 0, i14 + 8 | 0);
 i14 = __ZNK7WebCore3URL21hasFragmentIdentifierEv(i7) | 0;
 i15 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   if (i14) {
    break;
   } else {
    i12 = 0;
   }
   STACKTOP = i3;
   return i12 | 0;
  } else {
   i7 = i15 | 0;
   i16 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    if (i14) {
     break;
    } else {
     i12 = 0;
    }
    STACKTOP = i3;
    return i12 | 0;
   } else {
    HEAP32[i7 >> 2] = i16;
    if (i14) {
     break;
    } else {
     i12 = 0;
    }
    STACKTOP = i3;
    return i12 | 0;
   }
  }
 } while (0);
 i14 = i2 + 20 | 0;
 i15 = __ZN7WebCore15SVGURIReference26targetElementFromIRIStringERKN3WTF6StringERNS_8DocumentEPS2_PS5_((HEAP32[i13 >> 2] | 0) + 8 | 0, HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0, 0, 0) | 0;
 if ((i15 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i13 = HEAP32[i15 + 44 >> 2] | 0;
 i16 = HEAP32[__ZN7WebCore8SVGNames9cursorTagE >> 2] | 0;
 do {
  if ((i13 | 0) != (i16 | 0)) {
   if ((HEAP32[i13 + 12 >> 2] | 0) != (HEAP32[i16 + 12 >> 2] | 0)) {
    i12 = 0;
    STACKTOP = i3;
    return i12 | 0;
   }
   if ((HEAP32[i13 + 16 >> 2] | 0) == (HEAP32[i16 + 16 >> 2] | 0)) {
    break;
   } else {
    i12 = 0;
   }
   STACKTOP = i3;
   return i12 | 0;
  }
 } while (0);
 i16 = i15;
 __ZN7WebCore16SVGLengthContextC1EPKNS_10SVGElementE(i8, 0);
 HEAP8[i1 + 12 | 0] = 1;
 i13 = __ZN7WebCore16SVGCursorElement13xPropertyInfoEv() | 0;
 i7 = i15;
 i17 = HEAP32[i13 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 HEAP32[i6 + 4 >> 2] = HEAP32[i17 >> 2];
 i17 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i17 | 0) == 0) {
   i18 = 17;
  } else {
   i6 = HEAP32[i17 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i18 = 17;
    break;
   }
   if ((HEAP8[i6 + 20 | 0] & 1) == 0) {
    i18 = 17;
    break;
   }
   i19 = HEAP32[(HEAP32[i6 + 32 >> 2] | 0) + 20 >> 2] | 0;
  }
 } while (0);
 if ((i18 | 0) == 17) {
  i19 = i15 + 160 | 0;
 }
 HEAP32[i1 + 16 >> 2] = ~~+_round(+(+__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i19, i8)));
 i19 = __ZN7WebCore16SVGCursorElement13yPropertyInfoEv() | 0;
 i17 = HEAP32[i19 + 12 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 HEAP32[i5 + 4 >> 2] = HEAP32[i17 >> 2];
 i17 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i5) | 0;
 do {
  if ((i17 | 0) == 0) {
   i18 = 22;
  } else {
   i5 = HEAP32[i17 + 8 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i18 = 22;
    break;
   }
   if ((HEAP8[i5 + 20 | 0] & 1) == 0) {
    i18 = 22;
    break;
   }
   i20 = HEAP32[(HEAP32[i5 + 32 >> 2] | 0) + 20 >> 2] | 0;
  }
 } while (0);
 if ((i18 | 0) == 22) {
  i20 = i15 + 172 | 0;
 }
 HEAP32[i1 + 20 >> 2] = ~~+_round(+(+__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i20, i8)));
 i8 = i1 + 24 | 0;
 i20 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i20 | 0) == 0) {
   i21 = 0;
  } else {
   if ((HEAP8[i20 + 8 | 0] & 1) == 0) {
    i21 = 0;
    break;
   }
   i17 = HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv((HEAP32[i20 + 16 >> 2] | 0) + 48 | 0) | 0) >> 2] | 0;
   if ((i17 | 0) == 0) {
    i21 = 0;
    break;
   }
   i5 = i17 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
   i21 = i17;
  }
 } while (0);
 i20 = HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0;
 i14 = __ZN7WebCore16SVGCursorElement16hrefPropertyInfoEv() | 0;
 i17 = HEAP32[i14 + 12 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = HEAP32[i17 >> 2];
 i17 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i4) | 0;
 do {
  if ((i17 | 0) == 0) {
   i18 = 31;
  } else {
   i4 = HEAP32[i17 + 8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i18 = 31;
    break;
   }
   if ((HEAP8[i4 + 20 | 0] & 1) == 0) {
    i18 = 31;
    break;
   }
   i22 = HEAP32[i4 + 28 >> 2] | 0;
  }
 } while (0);
 if ((i18 | 0) == 31) {
  i22 = i15 + 184 | 0;
 }
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i9, i20, i22);
 i22 = i9 | 0;
 i9 = __ZN3WTF5equalEPKNS_10StringImplES2_(i21, HEAP32[i22 >> 2] | 0) | 0;
 i20 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i22 = i20 | 0;
   i15 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i22 >> 2] = i15;
    break;
   }
  }
 } while (0);
 do {
  if ((i21 | 0) != 0) {
   i20 = i21 | 0;
   i15 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i20 >> 2] = i15;
    break;
   }
  }
 } while (0);
 if (!i9) {
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i9 | 0) == 0) {
    HEAP32[i8 >> 2] = 0;
   } else {
    if ((HEAP8[i9 + 8 | 0] & 2) == 0) {
     HEAP32[i8 >> 2] = 0;
     i23 = i9;
    } else {
     HEAP32[i9 + 12 >> 2] = 0;
     i21 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     if ((i21 | 0) == 0) {
      break;
     } else {
      i23 = i21;
     }
    }
    i21 = i23 + 4 | 0;
    i15 = i21 | 0;
    i20 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    if ((i20 | 0) != 0) {
     HEAP32[i15 >> 2] = i20;
     break;
    }
    i20 = i21 - 4 | 0;
    if ((i20 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 7](i20);
   }
  } while (0);
  HEAP8[i1 + 28 | 0] = 0;
 }
 HEAP32[i10 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i11, i1 + 32 | 0, i10, i10);
 i11 = HEAP32[i10 >> 2] | 0;
 __ZN7WebCore10SVGElement19setCursorImageValueEPNS_19CSSCursorImageValueE(i11, i1);
 __ZN7WebCore16SVGCursorElement9addClientEPNS_10SVGElementE(i16, i11);
 i12 = 1;
 STACKTOP = i3;
 return i12 | 0;
}
function __ZN7WebCore19CSSCursorImageValue11cachedImageEPNS_20CachedResourceLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 28 | 0;
 do {
  if ((HEAP8[i6] & 1) == 0) {
   HEAP8[i6] = 1;
   i7 = i1 + 8 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if ((HEAP32[i8 + 4 >> 2] & 516096 | 0) == 8192) {
     __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i5, 0, i8 + 8 | 0);
     i9 = __ZNK7WebCore3URL21hasFragmentIdentifierEv(i5) | 0;
     i10 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i11 = i10 | 0;
       i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i10);
        break;
       } else {
        HEAP32[i11 >> 2] = i12;
        break;
       }
      }
     } while (0);
     if ((i2 | 0) == 0 | i9 ^ 1) {
      break;
     }
     i10 = HEAP32[i2 + 44 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     i12 = __ZN7WebCore15SVGURIReference26targetElementFromIRIStringERKN3WTF6StringERNS_8DocumentEPS2_PS5_((HEAP32[i7 >> 2] | 0) + 8 | 0, i10, 0, 0) | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     i10 = HEAP32[i12 + 44 >> 2] | 0;
     i11 = HEAP32[__ZN7WebCore8SVGNames9cursorTagE >> 2] | 0;
     if ((i10 | 0) != (i11 | 0)) {
      if ((HEAP32[i10 + 12 >> 2] | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i10 + 16 >> 2] | 0) != (HEAP32[i11 + 16 >> 2] | 0)) {
       break;
      }
     }
     i11 = i1 + 24 | 0;
     i10 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       if ((HEAP8[i10 + 8 | 0] & 2) == 0) {
        break;
       }
       HEAP32[i10 + 12 >> 2] = 0;
      }
     } while (0);
     i10 = __ZN7WebCore16SVGCursorElement16hrefPropertyInfoEv() | 0;
     i9 = HEAP32[i10 + 12 >> 2] | 0;
     HEAP32[i4 >> 2] = i12;
     HEAP32[i4 + 4 >> 2] = HEAP32[i9 >> 2];
     i9 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i4) | 0;
     do {
      if ((i9 | 0) == 0) {
       i13 = 20;
      } else {
       i10 = HEAP32[i9 + 8 >> 2] | 0;
       if ((i10 | 0) == 0) {
        i13 = 20;
        break;
       }
       if ((HEAP8[i10 + 20 | 0] & 1) == 0) {
        i13 = 20;
        break;
       }
       i14 = HEAP32[i10 + 28 >> 2] | 0;
      }
     } while (0);
     if ((i13 | 0) == 20) {
      i14 = i12 + 184 | 0;
     }
     i9 = __ZN3WTF10fastMallocEj(24) | 0;
     i10 = i9;
     __ZN7WebCore13CSSImageValueC1ERKN3WTF6StringE(i10, i14);
     i15 = __ZN7WebCore13CSSImageValue11cachedImageEPNS_20CachedResourceLoaderE(i10, i2) | 0;
     i10 = i15 | 0;
     if ((i15 | 0) != 0) {
      i16 = i15 + 4 | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     }
     i16 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = i10;
     do {
      if ((i16 | 0) != 0) {
       i15 = i16 + 4 | 0;
       i17 = i15 | 0;
       i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
       if ((i18 | 0) != 0) {
        HEAP32[i17 >> 2] = i18;
        break;
       }
       i18 = i15 - 4 | 0;
       if ((i18 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 7](i18);
      }
     } while (0);
     i16 = i9;
     i11 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i9);
      i19 = i10;
      STACKTOP = i3;
      return i19 | 0;
     } else {
      HEAP32[i16 >> 2] = i11;
      i19 = i10;
      STACKTOP = i3;
      return i19 | 0;
     }
    }
   } while (0);
   i8 = HEAP32[i7 >> 2] | 0;
   if ((HEAP32[i8 + 4 >> 2] & 516096 | 0) != 8192) {
    break;
   }
   i11 = i1 + 24 | 0;
   i16 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i16 | 0) == 0) {
     i20 = i8;
    } else {
     if ((HEAP8[i16 + 8 | 0] & 2) == 0) {
      i20 = i8;
      break;
     }
     HEAP32[i16 + 12 >> 2] = 0;
     i20 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   i7 = __ZN7WebCore13CSSImageValue11cachedImageEPNS_20CachedResourceLoaderE(i20, i2) | 0;
   if ((i7 | 0) != 0) {
    i16 = i7 + 4 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   }
   i16 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i7;
   if ((i16 | 0) == 0) {
    break;
   }
   i7 = i16 + 4 | 0;
   i16 = i7 | 0;
   i8 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i16 >> 2] = i8;
    break;
   }
   i8 = i7 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i19 = 0;
  STACKTOP = i3;
  return i19 | 0;
 } else {
  STACKTOP = i3;
  return ((HEAP8[i2 + 8 | 0] & 1) == 0 ? 0 : i2) | 0;
 }
 return 0;
}
function __ZN7WebCore19CSSCursorImageValueD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP8[i5 + 8 | 0] & 2) == 0) {
    break;
   }
   HEAP32[i5 + 12 >> 2] = 0;
  }
 } while (0);
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 L5 : do {
  if ((HEAP32[i6 + 4 >> 2] & 516096 | 0) == 8192) {
   __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i3, 0, i6 + 8 | 0);
   i7 = __ZNK7WebCore3URL21hasFragmentIdentifierEv(i3) | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     if (!i7) {
      break L5;
     }
    } else {
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      if (i7) {
       break;
      } else {
       break L5;
      }
     } else {
      HEAP32[i9 >> 2] = i10;
      if (i7) {
       break;
      } else {
       break L5;
      }
     }
    }
   } while (0);
   i7 = HEAP32[i1 + 32 >> 2] | 0;
   i8 = HEAP32[i1 + 36 >> 2] | 0;
   i10 = i7 + (i8 << 2) | 0;
   if ((HEAP32[i1 + 44 >> 2] | 0) == 0) {
    break;
   }
   L15 : do {
    if ((i8 | 0) == 0) {
     i11 = i7;
    } else {
     i9 = i7;
     while (1) {
      i12 = HEAP32[i9 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i11 = i9;
       break L15;
      }
      i9 = i9 + 4 | 0;
      if ((i9 | 0) == (i10 | 0)) {
       break L5;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i10 | 0)) {
    break;
   } else {
    i13 = i11;
   }
   while (1) {
    i7 = HEAP32[i13 >> 2] | 0;
    __ZN7WebCore10SVGElement23cursorImageValueRemovedEv(i7);
    i8 = __ZN7WebCore15SVGURIReference26targetElementFromIRIStringERKN3WTF6StringERNS_8DocumentEPS2_PS5_((HEAP32[i5 >> 2] | 0) + 8 | 0, HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0, 0, 0) | 0;
    do {
     if ((i8 | 0) != 0) {
      i9 = HEAP32[i8 + 44 >> 2] | 0;
      i12 = HEAP32[__ZN7WebCore8SVGNames9cursorTagE >> 2] | 0;
      if ((i9 | 0) != (i12 | 0)) {
       if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i12 + 12 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i9 + 16 >> 2] | 0) != (HEAP32[i12 + 16 >> 2] | 0)) {
        break;
       }
      }
      __ZN7WebCore16SVGCursorElement12removeClientEPNS_10SVGElementE(i8, i7);
     }
    } while (0);
    i7 = i13 + 4 | 0;
    if ((i7 | 0) == (i10 | 0)) {
     break L5;
    } else {
     i14 = i7;
    }
    while (1) {
     i7 = HEAP32[i14 >> 2] | 0;
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      break;
     }
     i7 = i14 + 4 | 0;
     if ((i7 | 0) == (i10 | 0)) {
      break L5;
     } else {
      i14 = i7;
     }
    }
    if ((i14 | 0) == (i10 | 0)) {
     break;
    } else {
     i13 = i14;
    }
   }
  }
 } while (0);
 i14 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i14 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i14);
 }
 i14 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i4 = i14 + 4 | 0;
   i1 = i4 | 0;
   i13 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i1 >> 2] = i13;
    break;
   }
   i13 = i4 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
  }
 } while (0);
 i14 = HEAP32[i5 >> 2] | 0;
 i5 = i14 | 0;
 i13 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i14);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i13;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore19CSSCursorImageValueD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP8[i5 + 8 | 0] & 2) == 0) {
    break;
   }
   HEAP32[i5 + 12 >> 2] = 0;
  }
 } while (0);
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 L5 : do {
  if ((HEAP32[i6 + 4 >> 2] & 516096 | 0) == 8192) {
   __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i3, 0, i6 + 8 | 0);
   i7 = __ZNK7WebCore3URL21hasFragmentIdentifierEv(i3) | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     if (!i7) {
      break L5;
     }
    } else {
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      if (i7) {
       break;
      } else {
       break L5;
      }
     } else {
      HEAP32[i9 >> 2] = i10;
      if (i7) {
       break;
      } else {
       break L5;
      }
     }
    }
   } while (0);
   i7 = HEAP32[i1 + 32 >> 2] | 0;
   i8 = HEAP32[i1 + 36 >> 2] | 0;
   i10 = i7 + (i8 << 2) | 0;
   if ((HEAP32[i1 + 44 >> 2] | 0) == 0) {
    break;
   }
   L15 : do {
    if ((i8 | 0) == 0) {
     i11 = i7;
    } else {
     i9 = i7;
     while (1) {
      i12 = HEAP32[i9 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i11 = i9;
       break L15;
      }
      i9 = i9 + 4 | 0;
      if ((i9 | 0) == (i10 | 0)) {
       break L5;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i10 | 0)) {
    break;
   } else {
    i13 = i11;
   }
   while (1) {
    i7 = HEAP32[i13 >> 2] | 0;
    __ZN7WebCore10SVGElement23cursorImageValueRemovedEv(i7);
    i8 = __ZN7WebCore15SVGURIReference26targetElementFromIRIStringERKN3WTF6StringERNS_8DocumentEPS2_PS5_((HEAP32[i5 >> 2] | 0) + 8 | 0, HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0, 0, 0) | 0;
    do {
     if ((i8 | 0) != 0) {
      i9 = HEAP32[i8 + 44 >> 2] | 0;
      i12 = HEAP32[__ZN7WebCore8SVGNames9cursorTagE >> 2] | 0;
      if ((i9 | 0) != (i12 | 0)) {
       if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i12 + 12 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i9 + 16 >> 2] | 0) != (HEAP32[i12 + 16 >> 2] | 0)) {
        break;
       }
      }
      __ZN7WebCore16SVGCursorElement12removeClientEPNS_10SVGElementE(i8, i7);
     }
    } while (0);
    i7 = i13 + 4 | 0;
    if ((i7 | 0) == (i10 | 0)) {
     break L5;
    } else {
     i14 = i7;
    }
    while (1) {
     i7 = HEAP32[i14 >> 2] | 0;
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      break;
     }
     i7 = i14 + 4 | 0;
     if ((i7 | 0) == (i10 | 0)) {
      break L5;
     } else {
      i14 = i7;
     }
    }
    if ((i14 | 0) == (i10 | 0)) {
     break;
    } else {
     i13 = i14;
    }
   }
  }
 } while (0);
 i14 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i14 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i14);
 }
 i14 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i4 = i14 + 4 | 0;
   i1 = i4 | 0;
   i13 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i1 >> 2] = i13;
    break;
   }
   i13 = i4 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
  }
 } while (0);
 i14 = HEAP32[i5 >> 2] | 0;
 i5 = i14 | 0;
 i13 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i14);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i13;
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore19CSSCursorImageValue13customCSSTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 40 | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i6 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i6 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i6 + 12 | 0;
 HEAP8[i11] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 i12 = i6 + 20 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZNK7WebCore8CSSValue7cssTextEv(i7, HEAP32[i2 + 8 >> 2] | 0);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i7);
 i13 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i7 = i13 | 0;
   i14 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i7 >> 2] = i14;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i2 + 12 | 0] & 1) != 0) {
  HEAP8[i5] = 32;
  i13 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i13 | 0) == 0) {
    i15 = 12;
   } else {
    i14 = HEAP32[i8 >> 2] | 0;
    if (i14 >>> 0 >= (HEAP32[i13 + 4 >> 2] | 0) >>> 0) {
     i15 = 12;
     break;
    }
    if ((HEAP32[i9 >> 2] | 0) != 0) {
     i15 = 12;
     break;
    }
    i7 = (HEAP8[i11] & 1) == 0;
    HEAP32[i8 >> 2] = i14 + 1;
    if (i7) {
     HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i14 << 1) >> 1] = 32;
     break;
    } else {
     HEAP8[(HEAP32[i12 >> 2] | 0) + i14 | 0] = 32;
     break;
    }
   }
  } while (0);
  if ((i15 | 0) == 12) {
   __ZN3WTF13StringBuilder6appendEPKhj(i6, i5, 1);
  }
  __ZN3WTF13StringBuilder12appendNumberEi(i6, HEAP32[i2 + 16 >> 2] | 0);
  HEAP8[i4] = 32;
  i5 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i5 | 0) == 0) {
    i15 = 19;
   } else {
    i13 = HEAP32[i8 >> 2] | 0;
    if (i13 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) >>> 0) {
     i15 = 19;
     break;
    }
    if ((HEAP32[i9 >> 2] | 0) != 0) {
     i15 = 19;
     break;
    }
    i14 = (HEAP8[i11] & 1) == 0;
    HEAP32[i8 >> 2] = i13 + 1;
    if (i14) {
     HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i13 << 1) >> 1] = 32;
     break;
    } else {
     HEAP8[(HEAP32[i12 >> 2] | 0) + i13 | 0] = 32;
     break;
    }
   }
  } while (0);
  if ((i15 | 0) == 19) {
   __ZN3WTF13StringBuilder6appendEPKhj(i6, i4, 1);
  }
  __ZN3WTF13StringBuilder12appendNumberEi(i6, HEAP32[i2 + 20 >> 2] | 0);
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i9 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i16 = i6;
   i15 = 24;
  }
 } else {
  HEAP32[i1 >> 2] = i2;
  i16 = i2;
  i15 = 24;
 }
 if ((i15 | 0) == 24) {
  i15 = i16 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 i15 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i10 = i15 | 0;
   i16 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i10 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i9 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i15 | 0;
 i16 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i16 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i16;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore10SVGElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i5 = (HEAPU16[i2 >> 1] | 0) - 1640531527 | 0;
 i6 = (HEAPU16[i1 + 2 >> 1] | 0) << 11 ^ i5 ^ i5 << 16;
 i5 = i2 + 4 | 0;
 i7 = i6 + (HEAPU16[i5 >> 1] | 0) + (i6 >>> 11) | 0;
 i6 = i7 ^ (HEAPU16[i1 + 6 >> 1] | 0) << 11 ^ i7 << 16;
 i7 = (i6 >>> 11) + i6 | 0;
 i6 = i7 << 3 ^ i7;
 i7 = (i6 >>> 5) + i6 | 0;
 i6 = i7 << 2 ^ i7;
 i7 = (i6 >>> 15) + i6 | 0;
 i6 = (i7 << 10 ^ i7) & 16777215;
 i7 = (i6 | 0) == 0 ? 8388608 : i6;
 if ((i4 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = (i7 >>> 23) + ~i7 | 0;
 i1 = i2 << 12 ^ i2;
 i2 = i1 >>> 7 ^ i1;
 i1 = i2 << 2 ^ i2;
 i2 = i1 >>> 20 ^ i1 | 1;
 i1 = i7;
 i7 = 0;
 while (1) {
  i9 = i1 & i3;
  i10 = i4 + (i9 * 12 & -1) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == (i6 | 0)) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
    i8 = i10;
    i12 = 10;
    break;
   }
  }
  if ((i11 | 0) == 0) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == 0) {
    i8 = 0;
    i12 = 11;
    break;
   }
  }
  i11 = (i7 | 0) == 0 ? i2 : i7;
  i1 = i11 + i9 | 0;
  i7 = i11;
 }
 if ((i12 | 0) == 11) {
  return i8 | 0;
 } else if ((i12 | 0) == 10) {
  return i8 | 0;
 }
 return 0;
}
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_iiif + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viiif + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_viiif + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 14;
}
function __ZN7WebCore19CSSCursorImageValue20cachedOrPendingImageERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 24 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i3 = __ZN3WTF10fastMallocEj(16) | 0;
   HEAP32[i3 + 4 >> 2] = 1;
   i4 = i3 + 8 | 0;
   i5 = HEAP8[i4] & -16;
   HEAP32[i3 >> 2] = H_BASE + 16;
   HEAP32[i3 + 12 >> 2] = i1;
   HEAP8[i4] = i5 | 2;
   i5 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i3;
   if ((i5 | 0) == 0) {
    break;
   }
   i3 = i5 + 4 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i5 >> 2] = i4;
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
  }
 } while (0);
 return HEAP32[i2 >> 2] | 0;
}
function __ZN7WebCore19CSSCursorImageValue16clearCachedImageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i2 >> 2] = 0;
  } else {
   if ((HEAP8[i3 + 8 | 0] & 2) == 0) {
    HEAP32[i2 >> 2] = 0;
    i4 = i3;
   } else {
    HEAP32[i3 + 12 >> 2] = 0;
    i5 = HEAP32[i2 >> 2] | 0;
    HEAP32[i2 >> 2] = 0;
    if ((i5 | 0) == 0) {
     break;
    } else {
     i4 = i5;
    }
   }
   i5 = i4 + 4 | 0;
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i5 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i7);
  }
 } while (0);
 HEAP8[i1 + 28 | 0] = 0;
 return;
}
function __ZNK7WebCore19CSSCursorImageValue11isSVGCursorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((HEAP32[i4 + 4 >> 2] & 516096 | 0) != 8192) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i3, 0, i4 + 8 | 0);
 i4 = __ZNK7WebCore3URL21hasFragmentIdentifierEv(i3) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = i4;
  STACKTOP = i2;
  return i5 | 0;
 }
 i3 = i1 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i5 = i4;
  STACKTOP = i2;
  return i5 | 0;
 } else {
  HEAP32[i3 >> 2] = i6;
  i5 = i4;
  STACKTOP = i2;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore19CSSCursorImageValueC2EN3WTF7PassRefINS_8CSSValueEEEbRKNS_8IntPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i1 >> 2] = 1;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -524288 | 16384;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 >> 2];
 HEAP8[i1 + 12 | 0] = i3 & 1;
 i3 = i4;
 i4 = i1 + 16 | 0;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i2;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP8[i1 + 28 | 0] = 0;
 _memset(i1 + 32 | 0, 0, 20) | 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore19CSSCursorImageValueC1EN3WTF7PassRefINS_8CSSValueEEEbRKNS_8IntPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i1 >> 2] = 1;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -524288 | 16384;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 >> 2];
 HEAP8[i1 + 12 | 0] = i3 & 1;
 i3 = i4;
 i4 = i1 + 16 | 0;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i2;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP8[i1 + 28 | 0] = 0;
 _memset(i1 + 32 | 0, 0, 20) | 0;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore19CSSCursorImageValue6equalsERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = (HEAP8[i2 + 12 | 0] & 1) != 0;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  if (i3) {
   i4 = 0;
   return i4 | 0;
  }
  i4 = __ZNK7WebCore8CSSValue6equalsERKS0_(HEAP32[i1 + 8 >> 2] | 0, HEAP32[i2 + 8 >> 2] | 0) | 0;
  return i4 | 0;
 }
 if (!i3) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 16 >> 2] | 0) != (HEAP32[i2 + 16 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i1 + 20 >> 2] | 0) == (HEAP32[i2 + 20 >> 2] | 0);
 return i4 | 0;
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
function __ZN7WebCore19CSSCursorImageValue14cachedImageURLEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i3 + 8 | 0] & 1) == 0) {
    break;
   }
   i2 = HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv((HEAP32[i3 + 16 >> 2] | 0) + 48 | 0) | 0) >> 2] | 0;
   HEAP32[i1 >> 2] = i2;
   if ((i2 | 0) == 0) {
    return;
   }
   i4 = i2 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
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
function __ZN7WebCore19CSSCursorImageValue23removeReferencedElementEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore10SVGElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 32 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore17StylePendingImage8cssValueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore17StylePendingImage26computeIntrinsicDimensionsEPKNS_13RenderElementERNS_6LengthES5_RNS_9FloatSizeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZNK7WebCore17StylePendingImage9imageSizeEPKNS_13RenderElementEf(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZNK7WebCore17StylePendingImage5imageEPNS_13RenderElementERKNS_7IntSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore17StylePendingImage27setContainerSizeForRendererEPKNS_13RenderElementERKNS_7IntSizeEf(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_viiif(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 FUNCTION_TABLE_viiif[i1 & 7](i2 | 0, i3 | 0, i4 | 0, +d5);
}
function dynCall_iiif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 return FUNCTION_TABLE_iiif[i1 & 3](i2 | 0, i3 | 0, +d4) | 0;
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
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore10StyleImage9canRenderEPKNS_12RenderObjectEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return 1;
}
function __ZNK7WebCore17StylePendingImage15knownToBeOpaqueEPKNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
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
function __ZN7WebCore17StylePendingImage12removeClientEPNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZN7WebCore17StylePendingImage9addClientEPNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 3](i2 | 0);
}
function __ZN7WebCore17StylePendingImageD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore17StylePendingImage22usesImageContainerSizeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17StylePendingImage22imageHasRelativeHeightEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17StylePendingImage21imageHasRelativeWidthEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b0(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 abort(0);
}
function __ZNK7WebCore10StyleImage16imageScaleFactorEv(i1) {
 i1 = i1 | 0;
 return +(+1);
}
function b7(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(7);
 return 0;
}
function __ZNK7WebCore17StylePendingImage4dataEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}
function __ZNK7WebCore10StyleImage13errorOccurredEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10StyleImage11cachedImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10StyleImage8isLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore17StylePendingImageD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b6(i1) {
 i1 = i1 | 0;
 abort(6);
 return +0;
}
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiif = [b0,b0,__ZN7WebCore17StylePendingImage27setContainerSizeForRendererEPKNS_13RenderElementERKNS_7IntSizeEf,b0,__ZNK7WebCore17StylePendingImage9imageSizeEPKNS_13RenderElementEf,b0,b0,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,__ZN7WebCore17StylePendingImage26computeIntrinsicDimensionsEPKNS_13RenderElementERNS_6LengthES5_RNS_9FloatSizeE,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore19CSSCursorImageValueD2Ev,b2,__ZN7WebCore17StylePendingImageD1Ev,b2,__ZN7WebCore17StylePendingImageD0Ev,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore17StylePendingImage12removeClientEPNS_13RenderElementE,b3,__ZNK7WebCore17StylePendingImage8cssValueEv,b3,__ZN7WebCore17StylePendingImage9addClientEPNS_13RenderElementE,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore10StyleImage8isLoadedEv,b4,__ZNK7WebCore17StylePendingImage21imageHasRelativeWidthEv,b4,__ZNK7WebCore10StyleImage13errorOccurredEv,b4,__ZNK7WebCore17StylePendingImage22imageHasRelativeHeightEv,b4,__ZNK7WebCore17StylePendingImage4dataEv,b4,__ZNK7WebCore17StylePendingImage22usesImageContainerSizeEv,b4,__ZNK7WebCore10StyleImage11cachedImageEv,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_fi = [b6,b6,__ZNK7WebCore10StyleImage16imageScaleFactorEv,b6];
  var FUNCTION_TABLE_iiif = [b7,b7,__ZNK7WebCore10StyleImage9canRenderEPKNS_12RenderObjectEf,b7];
  var FUNCTION_TABLE_iii = [b8,b8,__ZNK7WebCore17StylePendingImage15knownToBeOpaqueEPKNS_13RenderElementE,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,__ZN7WebCore19CSSCursorImageValueC2EN3WTF7PassRefINS_8CSSValueEEEbRKNS_8IntPointE,b9,__ZNK7WebCore17StylePendingImage5imageEPNS_13RenderElementERKNS_7IntSizeE,b9,b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiif: dynCall_viiif, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_iiif: dynCall_iiif, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiif": invoke_viiif, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_iiif": invoke_iiif, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8SVGNames9cursorTagE": __ZN7WebCore8SVGNames9cursorTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiif = Module["dynCall_viiif"] = asm["dynCall_viiif"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_iiif = Module["dynCall_iiif"] = asm["dynCall_iiif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore17StylePendingImage21imageHasRelativeWidthEv","__ZNK7WebCore10StyleImage11cachedImageEv","_strlen","__ZN7WebCore19CSSCursorImageValue16clearCachedImageEv","__ZN7WebCore19CSSCursorImageValueD2Ev","_memset","__ZNK7WebCore17StylePendingImage4dataEv","__ZN7WebCore17StylePendingImage26computeIntrinsicDimensionsEPKNS_13RenderElementERNS_6LengthES5_RNS_9FloatSizeE","__ZNK7WebCore19CSSCursorImageValue13customCSSTextEv","__ZN7WebCore19CSSCursorImageValue23updateIfSVGCursorIsUsedEPNS_7ElementE","__ZNK7WebCore10StyleImage8isLoadedEv","__ZN7WebCore17StylePendingImageD1Ev","__ZNK7WebCore17StylePendingImage15knownToBeOpaqueEPKNS_13RenderElementE","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_","__ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","_memcpy","__ZN3WTF7HashSetIPN7WebCore10SVGElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZNK7WebCore19CSSCursorImageValue11isSVGCursorEv","__ZN7WebCore19CSSCursorImageValue11cachedImageEPNS_20CachedResourceLoaderE","__ZNK7WebCore10StyleImage16imageScaleFactorEv","__ZNK7WebCore17StylePendingImage22imageHasRelativeHeightEv","__ZN7WebCore17StylePendingImage12removeClientEPNS_13RenderElementE","__ZNK7WebCore17StylePendingImage5imageEPNS_13RenderElementERKNS_7IntSizeE","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZNK7WebCore19CSSCursorImageValue6equalsERKS0_","__ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZNK7WebCore10StyleImage13errorOccurredEv","__ZN7WebCore19CSSCursorImageValueC2EN3WTF7PassRefINS_8CSSValueEEEbRKNS_8IntPointE","__ZN7WebCore19CSSCursorImageValue20cachedOrPendingImageERNS_8DocumentE","__ZNK7WebCore17StylePendingImage9imageSizeEPKNS_13RenderElementEf","__ZNK7WebCore17StylePendingImage22usesImageContainerSizeEv","__ZN7WebCore17StylePendingImageD0Ev","__ZN7WebCore17StylePendingImage27setContainerSizeForRendererEPKNS_13RenderElementERKNS_7IntSizeEf","__ZN7WebCore19CSSCursorImageValue14cachedImageURLEv","__ZNK7WebCore17StylePendingImage8cssValueEv","__ZN7WebCore19CSSCursorImageValue23removeReferencedElementEPNS_10SVGElementE","__ZNK7WebCore10StyleImage9canRenderEPKNS_12RenderObjectEf","__ZN7WebCore17StylePendingImage9addClientEPNS_13RenderElementE"]
