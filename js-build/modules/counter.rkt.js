import * as $rjs_core from '../runtime/core.js';import * as M0 from "../collects/racket/private/kw.rkt.js";import * as M1 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";import * as M2 from "../runtime/kernel.rkt.js";import * as M3 from "./rackt.rkt.js";var counter = function(props43, __dot__dot_44) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}var let_result25 = M3.use_state(0);var counter45 = let_result25.getAt(0);var set_counter46 = let_result25.getAt(1);var temp28 = $rjs_core.UString.make("div");var __dot__dot__dot_test_by_src_by_counter_dot_rkt__18847 = M3.__lt_el;var temp148 = $rjs_core.UString.make("button");var temp249 = {'className':$rjs_core.UString.make("button"),'type':$rjs_core.UString.make("button"),'onClick':function(_51) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return set_counter46(counter45-1);}};var temp350 = $rjs_core.UString.make("- 1");var temp27 = M2.checked_procedure_check_and_extract(M0.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_test_by_src_by_counter_dot_rkt__18847,M0.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M2.list(temp249),temp148,temp350);var __dot__dot__dot_test_by_src_by_counter_dot_rkt__38852 = M3.__lt_el;var temp453 = $rjs_core.UString.make("span");var temp554 = {'className':$rjs_core.UString.make("counter")};var counter655 = counter45;var temp26 = M2.checked_procedure_check_and_extract(M0.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_test_by_src_by_counter_dot_rkt__38852,M0.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M2.list(temp554),temp453,counter655);var __dot__dot__dot_test_by_src_by_counter_dot_rkt__45856 = M3.__lt_el;var temp757 = $rjs_core.UString.make("button");var temp858 = {'className':$rjs_core.UString.make("button"),'type':$rjs_core.UString.make("button"),'onClick':function(_60) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return set_counter46(counter45+1);}};var temp959 = $rjs_core.UString.make("+ 1");return M3.__lt_el(temp28,temp27,temp26,M2.checked_procedure_check_and_extract(M0.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_test_by_src_by_counter_dot_rkt__45856,M0.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M2.list(temp858),temp757,temp959));};var __rjs_quoted__ = {};export { __rjs_quoted__,counter };