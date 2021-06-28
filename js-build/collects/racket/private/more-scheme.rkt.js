import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/paramz.rkt.js";import * as M1 from "../../../runtime/kernel.rkt.js";var current_parameterization = function() {if (arguments.length!==0) {throw $rjs_core.racketContractError("arity mismatch");} else {}return M1.continuation_mark_set_first(false,M0.parameterization_key);};var call_with_parameterization = function(paramz1910, thunk1911) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M1.__rjs_quoted__.parameterization_p(paramz1910)!==false) {var if_res954 = M1.rvoid();} else {var if_res954 = M1.raise_argument_error($rjs_core.Symbol.make("call-with-parameterization"),$rjs_core.UString.make("parameterization?"),0,paramz1910,thunk1911);}if_res954;if (M1.procedure_p(thunk1911)!==false) {var if_res955 = M1.procedure_arity_includes_p(thunk1911,0);} else {var if_res955 = false;}if (if_res955!==false) {var if_res956 = M1.rvoid();} else {var if_res956 = M1.raise_argument_error($rjs_core.Symbol.make("call-with-parameterization"),$rjs_core.UString.make("(-> any)"),1,paramz1910,thunk1911);}if_res956;var __context957 = $rjs_core.Marks.getFrames();var __context958;try {__context958 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M0.parameterization_key,paramz1910);var __wcm_result959 = thunk1911();} finally {$rjs_core.Marks.updateFrame(__context957,__context958);}return __wcm_result959;};var let_result961 = M1.make_struct_type($rjs_core.Symbol.make("break-parameterization"),false,1,0,false);var struct_break_paramz = let_result961.getAt(0);var make_break_paramz = let_result961.getAt(1);var break_paramz_p = let_result961.getAt(2);var break_paramz_ref = let_result961.getAt(3);var break_paramz_set_bang_ = let_result961.getAt(4);var let_result962 = M1.make_struct_type($rjs_core.Symbol.make("break-parameterization"),false,1,0,false,M1.rnull,M1.current_inspector());var type1912 = let_result962.getAt(0);var maker1913 = let_result962.getAt(1);var pred1914 = let_result962.getAt(2);var access1915 = let_result962.getAt(3);var mutate1916 = let_result962.getAt(4);var let_result963 = M1.values(type1912,maker1913,pred1914,M1.make_struct_field_accessor(access1915,0,$rjs_core.Symbol.make("cell")),M1.make_struct_field_mutator(mutate1916,0,$rjs_core.Symbol.make("cell")));var struct_break_parameterization = let_result963.getAt(0);var make_break_parameterization = let_result963.getAt(1);var break_parameterization_p = let_result963.getAt(2);var break_parameterization_cell = let_result963.getAt(3);var set_break_parameterization_cell_bang_ = let_result963.getAt(4);var current_break_parameterization = function() {if (arguments.length!==0) {throw $rjs_core.racketContractError("arity mismatch");} else {}return make_break_paramz(M1.continuation_mark_set_first(false,M0.break_enabled_key));};var call_with_break_parameterization = function(paramz1917, thunk1918) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (break_paramz_p(paramz1917)!==false) {var if_res964 = M1.rvoid();} else {var if_res964 = M1.raise_argument_error($rjs_core.Symbol.make("call-with-break-parameterization"),$rjs_core.UString.make("break-parameterization?"),0,paramz1917,thunk1918);}if_res964;if (M1.procedure_p(thunk1918)!==false) {var if_res965 = M1.procedure_arity_includes_p(thunk1918,0);} else {var if_res965 = false;}if (if_res965!==false) {var if_res966 = M1.rvoid();} else {var if_res966 = M1.raise_argument_error($rjs_core.Symbol.make("call-with-parameterization"),$rjs_core.UString.make("(-> any)"),1,paramz1917,thunk1918);}if_res966;var __context968 = $rjs_core.Marks.getFrames();var __context969;try {__context969 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M0.break_enabled_key,break_paramz_ref(paramz1917,0));M0.check_for_break();var __wcm_result970 = thunk1918();} finally {$rjs_core.Marks.updateFrame(__context968,__context969);}var begin_res967 = __wcm_result970;M0.check_for_break();return begin_res967;};var select_handler_by_no_breaks = function(e1919, bpz1920, l1921) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __context979 = $rjs_core.Marks.getFrames();var __context980;try {__context980 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M0.break_enabled_key,M1.make_thread_cell(false));var loop1922 = function(l1923) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M1.null_p(l1923)!==false) {var if_res978 = M1.raise(e1919);} else {if (M1.caar(l1923)(e1919)!==false) {var begin_res972 = M1.cdar(l1923)(e1919);var __context973 = $rjs_core.Marks.getFrames();var __context974;try {__context974 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M0.break_enabled_key,bpz1920);var __wcm_result975 = M0.check_for_break();} finally {$rjs_core.Marks.updateFrame(__context973,__context974);}__wcm_result975;var if_res977 = begin_res972;} else {var if_res977 = loop1922(M1.cdr(l1923));}var if_res978 = if_res977;}return if_res978;};var __wcm_result981 = loop1922(l1921);} finally {$rjs_core.Marks.updateFrame(__context979,__context980);}return __wcm_result981;};var select_handler_by_breaks_as_is = function(e1924, bpz1925, l1926) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M1.null_p(l1926)!==false) {var if_res988 = M1.raise(e1924);} else {if (M1.caar(l1926)(e1924)!==false) {var __context983 = $rjs_core.Marks.getFrames();var __context984;try {__context984 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M0.break_enabled_key,bpz1925);M0.check_for_break();var __wcm_result985 = M1.cdar(l1926)(e1924);} finally {$rjs_core.Marks.updateFrame(__context983,__context984);}var if_res987 = __wcm_result985;} else {var if_res987 = select_handler_by_breaks_as_is(e1924,bpz1925,M1.cdr(l1926));}var if_res988 = if_res987;}return if_res988;};var false_thread_cell = M1.make_thread_cell(false);var check_with_handlers_in_context = function(handler_prompt_key1927) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M1.__rjs_quoted__.continuation_prompt_available_p(handler_prompt_key1927)!==false) {var if_res989 = M1.rvoid();} else {var if_res989 = M1.error($rjs_core.Symbol.make("with-handlers"),$rjs_core.UString.make("exception handler used out of context"));}return if_res989;};var handler_prompt_key = M1.make_continuation_prompt_tag($rjs_core.Symbol.make("handler-prompt-tag"));var call_handled_body = function(bpz1928, handle_proc1929, body_thunk1930) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __context998 = $rjs_core.Marks.getFrames();var __context999;try {__context999 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M0.break_enabled_key,false_thread_cell);var __wcm_result1000 = M1.call_with_continuation_prompt(function(bpz1931, body_thunk1932) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __context994 = $rjs_core.Marks.getFrames();var __context995;try {__context995 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M0.break_enabled_key,bpz1931);var __context990 = $rjs_core.Marks.getFrames();var __context991;try {__context991 = __context990;$rjs_core.Marks.setMark(M0.exception_handler_key,function(e1933) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return M1.abort_current_continuation(handler_prompt_key,e1933);});var __wcm_result992 = body_thunk1932();} finally {$rjs_core.Marks.updateFrame(__context990,__context991);}var __wcm_result996 = __wcm_result992;} finally {$rjs_core.Marks.updateFrame(__context994,__context995);}return __wcm_result996;},handler_prompt_key,handle_proc1929,bpz1928,body_thunk1930);} finally {$rjs_core.Marks.updateFrame(__context998,__context999);}return __wcm_result1000;};var call_with_exception_handler = function(exnh1934, thunk1935) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __context1003 = $rjs_core.Marks.getFrames();var __context1004;try {__context1004 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M0.exception_handler_key,exnh1934);var __wcm_result1005 = thunk1935();} finally {$rjs_core.Marks.updateFrame(__context1003,__context1004);}var begin_res1002 = __wcm_result1005;M1.rvoid();return begin_res1002;};var call_by_cc = M1.__rjs_quoted__.call_with_current_continuation;var not_there = M1.gensym();var do_hash_update = function(who1936, mut_p1937, set1938, ht1939, key1940, xform1941, default1942) {if (arguments.length!==7) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M1.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res1013 = M1.rvoid();} else {if (M1.hash_p(ht1939)!==false) {if (mut_p1937!==false) {var if_res1007 = M1.not(M1.immutable_p(ht1939));} else {var if_res1007 = M1.immutable_p(ht1939);}var if_res1008 = if_res1007;} else {var if_res1008 = false;}if (if_res1008!==false) {var if_res1010 = M1.rvoid();} else {if (mut_p1937!==false) {var if_res1009 = $rjs_core.UString.make("(and/c hash? (not/c immutable?))");} else {var if_res1009 = $rjs_core.UString.make("(and/c hash? immutable?)");}var if_res1010 = M1.raise_argument_error(who1936,if_res1009,ht1939);}if_res1010;if (M1.procedure_p(xform1941)!==false) {var if_res1011 = M1.procedure_arity_includes_p(xform1941,1);} else {var if_res1011 = false;}if (if_res1011!==false) {var if_res1012 = M1.rvoid();} else {var if_res1012 = M1.raise_argument_error(who1936,$rjs_core.UString.make("(any/c . -> . any/c)"),xform1941);}var if_res1013 = if_res1012;}if_res1013;var v1943 = M1.hash_ref(ht1939,key1940,default1942);if (M1.eq_p(v1943,not_there)!==false) {var if_res1014 = M1.raise_mismatch_error(who1936,$rjs_core.UString.make("no value found for key: "),key1940);} else {var if_res1014 = set1938(ht1939,key1940,xform1941(v1943));}return if_res1014;};var cl1015 = function(ht1944, key1945, xform1946, default1947) {if (arguments.length!==4) {throw $rjs_core.racketContractError("arity mismatch");} else {}return do_hash_update($rjs_core.Symbol.make("hash-update"),false,M1.hash_set,ht1944,key1945,xform1946,default1947);};var cl1016 = function(ht1948, key1949, xform1950) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}return hash_update(ht1948,key1949,xform1950,not_there);};var hash_update = $rjs_core.attachProcedureArity(function() {var fixed_lam1017 = {'4':cl1015,'3':cl1016}[arguments.length];if (fixed_lam1017!==undefined) {return fixed_lam1017.apply(null,arguments);} else {return M1.error($rjs_core.UString.make("case-lambda: invalid case"));}},[3,4]);var cl1018 = function(ht1951, key1952, xform1953, default1954) {if (arguments.length!==4) {throw $rjs_core.racketContractError("arity mismatch");} else {}return do_hash_update($rjs_core.Symbol.make("hash-update!"),true,M1.hash_set_bang_,ht1951,key1952,xform1953,default1954);};var cl1019 = function(ht1955, key1956, xform1957) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}return hash_update_bang_(ht1955,key1956,xform1957,not_there);};var hash_update_bang_ = $rjs_core.attachProcedureArity(function() {var fixed_lam1020 = {'4':cl1018,'3':cl1019}[arguments.length];if (fixed_lam1020!==undefined) {return fixed_lam1020.apply(null,arguments);} else {return M1.error($rjs_core.UString.make("case-lambda: invalid case"));}},[3,4]);var hash_has_key_p = function(ht1958, key1959) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M1.hash_p(ht1958)!==false) {var if_res1021 = M1.rvoid();} else {var if_res1021 = M1.raise_argument_error($rjs_core.Symbol.make("hash-has-key?"),$rjs_core.UString.make("hash?"),0,ht1958,key1959);}if_res1021;return M1.not(M1.eq_p(not_there,M1.hash_ref(ht1958,key1959,not_there)));};var hash_ref_bang_ = function(ht1960, key1961, new1962) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M1.hash_p(ht1960)!==false) {var if_res1022 = M1.not(M1.immutable_p(ht1960));} else {var if_res1022 = false;}if (if_res1022!==false) {var if_res1023 = M1.rvoid();} else {var if_res1023 = M1.raise_argument_error($rjs_core.Symbol.make("hash-ref!"),$rjs_core.UString.make("(and/c hash? (not/c immutable?))"),0,ht1960,key1961,new1962);}if_res1023;var v1963 = M1.hash_ref(ht1960,key1961,not_there);if (M1.eq_p(not_there,v1963)!==false) {if (M1.procedure_p(new1962)!==false) {var if_res1024 = new1962();} else {var if_res1024 = new1962;}var n1964 = if_res1024;M1.hash_set_bang_(ht1960,key1961,n1964);var if_res1025 = n1964;} else {var if_res1025 = v1963;}return if_res1025;};var __rjs_quoted__ = {};__rjs_quoted__.select_handler_by_breaks_as_is = select_handler_by_breaks_as_is;__rjs_quoted__.call_by_cc = call_by_cc;__rjs_quoted__.select_handler_by_no_breaks = select_handler_by_no_breaks;__rjs_quoted__.call_handled_body = call_handled_body;export { __rjs_quoted__,hash_update_bang_,hash_update,hash_has_key_p,hash_ref_bang_,call_by_cc,call_with_exception_handler,break_paramz_p as break_parameterization_p,call_with_break_parameterization,current_break_parameterization,call_with_parameterization,current_parameterization };