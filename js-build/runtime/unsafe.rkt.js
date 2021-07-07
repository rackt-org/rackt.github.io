import * as $rjs_core from './core.js';import * as Core from "./core.js";var unsafe_fx_plus_ = function(a62, b63) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a62+b63)|0;};var unsafe_fx_ = function(a64, b65) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a64-b65)|0;};var unsafe_fx_times_ = function(a66, b67) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a66*b67)|0;};var unsafe_fxquotient = function(a68, b69) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a68/b69)|0;};var unsafe_fxremainder = function(a70, b71) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a70%b71)|0;};var unsafe_fxmodulo = function(a72, b73) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}var remainder74 = a72%b73;if ((remainder74>=0)!==false) {var if_res22 = remainder74;} else {var if_res22 = remainder74+b73;}return Math.floor(if_res22);};var unsafe_fxabs = function(a75) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return Math.abs(a75);};var unsafe_fx_eq_ = function(a76, b77) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a76===b77;};var unsafe_fx_lt_ = function(a78, b79) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a78<b79;};var unsafe_fx_lt__eq_ = function(a80, b81) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a80<=b81;};var unsafe_fx_gt_ = function(a82, b83) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a82>b83;};var unsafe_fx_gt__eq_ = function(a84, b85) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a84>=b85;};var unsafe_fxmin = function(a86, b87) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if ((a86<b87)!==false) {var if_res23 = a86;} else {var if_res23 = b87;}return if_res23;};var unsafe_fxmax = function(a88, b89) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if ((a88>b89)!==false) {var if_res24 = b89;} else {var if_res24 = a88;}return if_res24;};var unsafe_fl_eq_ = function(a90, b91) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a90===b91;};var unsafe_fl_lt_ = function(a92, b93) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a92<b93;};var unsafe_fl_lt__eq_ = function(a94, b95) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a94<=b95;};var unsafe_fl_gt_ = function(a96, b97) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a96>b97;};var unsafe_fl_gt__eq_ = function(a98, b99) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a98>=b99;};var unsafe_flmin = function(a100, b101) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if ((a100<b101)!==false) {var if_res25 = a100;} else {var if_res25 = b101;}return if_res25;};var unsafe_flmax = function(a102, b103) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if ((a102>b103)!==false) {var if_res26 = b103;} else {var if_res26 = a102;}return if_res26;};var unsafe_fxrshift = function(a104, b105) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a104>>b105)|0;};var unsafe_fxlshift = function(a106, b107) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a106<<b107)|0;};var unsafe_fxand = function(a108, b109) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a108&&b109)|0;};var unsafe_fxior = function(a110, b111) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a110||b111)|0;};var unsafe_fxxor = function(a112, b113) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a112^b113)|0;};var unsafe_fxnot = Core.bitwiseNot;var unsafe_car = function(v114) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v114.hd;};var unsafe_cdr = function(v115) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v115.tl;};var unsafe_mcar = function(v116) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v116.hd;};var unsafe_mcdr = function(v117) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v117.tl;};var unsafe_set_mcar_bang_ = function(p118, v119) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return p118.setCar(v119);};var unsafe_set_mcdr_bang_ = function(p120, v121) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return p120.setCdr(v121);};var unsafe_cons_list = function(v122, rest123) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return Core.Pair.make(v122,rest123);};var unsafe_struct_ref = function(v124, k125) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v124._fields[k125];};var unsafe_vector_ref = function(v126, k127) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v126.ref(k127);};var unsafe_vector_set_bang_ = function(v128, k129, val130) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v128.set(k129,val130);};var unsafe_vector_length = function(v131) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v131.length();};var unsafe_immutable_hash_iterate_first = function(h132) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h132.iterateFirst();};var unsafe_immutable_hash_iterate_next = function(h133, i134) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h133.iterateNext(i134);};var unsafe_immutable_hash_iterate_key = function(h135, i136) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h135.iterateKey(i136);};var unsafe_immutable_hash_iterate_value = function(h137, i138) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h137.iterateValue(i138);};var unsafe_immutable_hash_iterate_key_plus_value = function(h139, i140) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h139.iterateKeyValue(i140);};var unsafe_immutable_hash_iterate_pair = function(h141, i142) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h141.iteratePair(i142);};var unsafe_mutable_hash_iterate_first = function(h143) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h143.iterateFirst();};var unsafe_mutable_hash_iterate_next = function(h144, i145) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h144.iterateNext(i145);};var unsafe_mutable_hash_iterate_key = function(h146, i147) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h146.iterateKey(i147);};var unsafe_mutable_hash_iterate_value = function(h148, i149) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h148.iterateValue(i149);};var unsafe_mutable_hash_iterate_key_plus_value = function(h150, i151) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h150.iterateKeyValue(i151);};var unsafe_mutable_hash_iterate_pair = function(h152, i153) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h152.iteratePair(i153);};var unsafe_undefined = Core.theUnsafeUndefined;var unsafe_make_place_local = Core.Box.make;var unsafe_place_local_set_bang_ = function(b154, v155) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return b154.set(v155);};var unsafe_place_local_ref = function(b156) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return b156.get();};var variable_reference_from_unsafe_p = function(v157) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return false;};var unsafe_root_continuation_prompt_tag = function() {if (arguments.length!==0) {throw $rjs_core.racketContractError("arity mismatch");} else {}return Core.Marks.defaultContinuationPromptTag();};var __rjs_quoted__ = {};export { __rjs_quoted__,unsafe_fx_plus_,unsafe_fx_,unsafe_fx_times_,unsafe_fxquotient,unsafe_fxremainder,unsafe_fxmodulo,unsafe_fxabs,unsafe_fx_eq_,unsafe_fx_lt_,unsafe_fx_lt__eq_,unsafe_fx_gt_,unsafe_fx_gt__eq_,unsafe_fxmin,unsafe_fxmax,unsafe_fl_eq_,unsafe_fl_lt_,unsafe_fl_lt__eq_,unsafe_fl_gt_,unsafe_fl_gt__eq_,unsafe_flmin,unsafe_flmax,unsafe_fxrshift,unsafe_fxlshift,unsafe_fxand,unsafe_fxior,unsafe_fxxor,unsafe_fxnot,unsafe_car,unsafe_cdr,unsafe_mcar,unsafe_mcdr,unsafe_set_mcar_bang_,unsafe_set_mcdr_bang_,unsafe_cons_list,unsafe_struct_ref,unsafe_vector_ref,unsafe_vector_set_bang_,unsafe_vector_length,unsafe_immutable_hash_iterate_first,unsafe_immutable_hash_iterate_next,unsafe_immutable_hash_iterate_key,unsafe_immutable_hash_iterate_value,unsafe_immutable_hash_iterate_key_plus_value,unsafe_immutable_hash_iterate_pair,unsafe_mutable_hash_iterate_first,unsafe_mutable_hash_iterate_next,unsafe_mutable_hash_iterate_key,unsafe_mutable_hash_iterate_value,unsafe_mutable_hash_iterate_key_plus_value,unsafe_mutable_hash_iterate_pair,unsafe_undefined,unsafe_make_place_local,unsafe_place_local_set_bang_,unsafe_place_local_ref,variable_reference_from_unsafe_p,unsafe_root_continuation_prompt_tag };