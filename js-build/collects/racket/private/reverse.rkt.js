import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";import * as M1 from "../../../runtime/core.rkt.js";M1.__rjs_quoted__.___declare;$rjs_core.Keyword.make("cross-phase-persistent");var reverse = function(l2588) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res1629 = M0.rvoid();} else {if (M0.list_p(l2588)!==false) {var if_res1628 = M0.rvoid();} else {var if_res1628 = M0.raise_argument_error($rjs_core.Symbol.make("reverse"),$rjs_core.UString.make("list?"),l2588);}var if_res1629 = if_res1628;}if_res1629;var loop2589 = function(a2590, l2591) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(l2591)!==false) {var if_res1630 = a2590;} else {var if_res1630 = loop2589(M0.cons(M0.car(l2591),a2590),M0.cdr(l2591));}return if_res1630;};return loop2589(M0.rnull,l2588);};var __rjs_quoted__ = {};export { __rjs_quoted__,reverse as alt_reverse };