import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";import * as M1 from "./kw.rkt.js";var cl728 = function(f1344, l1345) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res735 = true;} else {if (M0.procedure_p(f1344)!==false) {if (M0.procedure_arity_includes_p(f1344,1)!==false) {var if_res733 = M0.list_p(l1345);} else {var if_res733 = false;}var if_res734 = if_res733;} else {var if_res734 = false;}var if_res735 = if_res734;}if (if_res735!==false) {var loop1346 = function(l1347) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(l1347)!==false) {var if_res736 = M0.rnull;} else {var r1348 = M0.cdr(l1347);var if_res736 = M0.cons(f1344(M0.car(l1347)),loop1346(r1348));}return if_res736;};var if_res737 = loop1346(l1345);} else {var if_res737 = gen_map(f1344,M0.list(l1345));}return if_res737;};var cl729 = function(f1349, l11350, l21351) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res742 = true;} else {if (M0.procedure_p(f1349)!==false) {if (M0.procedure_arity_includes_p(f1349,2)!==false) {if (M0.list_p(l11350)!==false) {if (M0.list_p(l21351)!==false) {var if_res738 = M0.__eq_(M0.length(l11350),M0.length(l21351));} else {var if_res738 = false;}var if_res739 = if_res738;} else {var if_res739 = false;}var if_res740 = if_res739;} else {var if_res740 = false;}var if_res741 = if_res740;} else {var if_res741 = false;}var if_res742 = if_res741;}if (if_res742!==false) {var loop1352 = function(l11353, l21354) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(l11353)!==false) {var if_res743 = M0.rnull;} else {var r11355 = M0.cdr(l11353);var r21356 = M0.cdr(l21354);var if_res743 = M0.cons(f1349(M0.car(l11353),M0.car(l21354)),loop1352(r11355,r21356));}return if_res743;};var if_res744 = loop1352(l11350,l21351);} else {var if_res744 = gen_map(f1349,M0.list(l11350,l21351));}return if_res744;};var cl730 = $rjs_core.attachProcedureArity(function(f1357, l1358, ...args1359745) {if (arguments.length<2) {throw $rjs_core.racketContractError("arity mismatch");} else {}var args1359 = $rjs_core.Pair.listFromArray(args1359745);return gen_map(f1357,M0.cons(l1358,args1359));});var map1343 = $rjs_core.attachProcedureArity(function() {var fixed_lam731 = {'2':cl728,'3':cl729}[arguments.length];if (fixed_lam731!==undefined) {return fixed_lam731.apply(null,arguments);} else {if (M0.__gt__eq_(cl730.length,1)!==false) {var if_res732 = cl730.apply(null,arguments);} else {var if_res732 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res732;}},[M0.make_arity_at_least(2)]);var map2 = map1343;var cl746 = function(f1361, l1362) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res753 = true;} else {if (M0.procedure_p(f1361)!==false) {if (M0.procedure_arity_includes_p(f1361,1)!==false) {var if_res751 = M0.list_p(l1362);} else {var if_res751 = false;}var if_res752 = if_res751;} else {var if_res752 = false;}var if_res753 = if_res752;}if (if_res753!==false) {var loop1363 = function(l1364) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(l1364)!==false) {var if_res754 = M0.rvoid();} else {var r1365 = M0.cdr(l1364);f1361(M0.car(l1364));var if_res754 = loop1363(r1365);}return if_res754;};var if_res755 = loop1363(l1362);} else {var if_res755 = gen_for_each(f1361,M0.list(l1362));}return if_res755;};var cl747 = function(f1366, l11367, l21368) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res760 = true;} else {if (M0.procedure_p(f1366)!==false) {if (M0.procedure_arity_includes_p(f1366,2)!==false) {if (M0.list_p(l11367)!==false) {if (M0.list_p(l21368)!==false) {var if_res756 = M0.__eq_(M0.length(l11367),M0.length(l21368));} else {var if_res756 = false;}var if_res757 = if_res756;} else {var if_res757 = false;}var if_res758 = if_res757;} else {var if_res758 = false;}var if_res759 = if_res758;} else {var if_res759 = false;}var if_res760 = if_res759;}if (if_res760!==false) {var loop1369 = function(l11370, l21371) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(l11370)!==false) {var if_res761 = M0.rvoid();} else {var r11372 = M0.cdr(l11370);var r21373 = M0.cdr(l21371);f1366(M0.car(l11370),M0.car(l21371));var if_res761 = loop1369(r11372,r21373);}return if_res761;};var if_res762 = loop1369(l11367,l21368);} else {var if_res762 = gen_for_each(f1366,M0.list(l11367,l21368));}return if_res762;};var cl748 = $rjs_core.attachProcedureArity(function(f1374, l1375, ...args1376763) {if (arguments.length<2) {throw $rjs_core.racketContractError("arity mismatch");} else {}var args1376 = $rjs_core.Pair.listFromArray(args1376763);return gen_for_each(f1374,M0.cons(l1375,args1376));});var for_each1360 = $rjs_core.attachProcedureArity(function() {var fixed_lam749 = {'2':cl746,'3':cl747}[arguments.length];if (fixed_lam749!==undefined) {return fixed_lam749.apply(null,arguments);} else {if (M0.__gt__eq_(cl748.length,1)!==false) {var if_res750 = cl748.apply(null,arguments);} else {var if_res750 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res750;}},[M0.make_arity_at_least(2)]);var for_each2 = for_each1360;var cl764 = function(f1378, l1379) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res771 = true;} else {if (M0.procedure_p(f1378)!==false) {if (M0.procedure_arity_includes_p(f1378,1)!==false) {var if_res769 = M0.list_p(l1379);} else {var if_res769 = false;}var if_res770 = if_res769;} else {var if_res770 = false;}var if_res771 = if_res770;}if (if_res771!==false) {if (M0.null_p(l1379)!==false) {var if_res774 = true;} else {var loop1380 = function(l1381) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(M0.cdr(l1381))!==false) {var if_res773 = f1378(M0.car(l1381));} else {var r1382 = M0.cdr(l1381);if (f1378(M0.car(l1381))!==false) {var if_res772 = loop1380(r1382);} else {var if_res772 = false;}var if_res773 = if_res772;}return if_res773;};var if_res774 = loop1380(l1379);}var if_res775 = if_res774;} else {var if_res775 = gen_andmap(f1378,M0.list(l1379));}return if_res775;};var cl765 = function(f1383, l11384, l21385) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res780 = true;} else {if (M0.procedure_p(f1383)!==false) {if (M0.procedure_arity_includes_p(f1383,2)!==false) {if (M0.list_p(l11384)!==false) {if (M0.list_p(l21385)!==false) {var if_res776 = M0.__eq_(M0.length(l11384),M0.length(l21385));} else {var if_res776 = false;}var if_res777 = if_res776;} else {var if_res777 = false;}var if_res778 = if_res777;} else {var if_res778 = false;}var if_res779 = if_res778;} else {var if_res779 = false;}var if_res780 = if_res779;}if (if_res780!==false) {if (M0.null_p(l11384)!==false) {var if_res783 = true;} else {var loop1386 = function(l11387, l21388) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(M0.cdr(l11387))!==false) {var if_res782 = f1383(M0.car(l11387),M0.car(l21388));} else {var r11389 = M0.cdr(l11387);var r21390 = M0.cdr(l21388);if (f1383(M0.car(l11387),M0.car(l21388))!==false) {var if_res781 = loop1386(r11389,r21390);} else {var if_res781 = false;}var if_res782 = if_res781;}return if_res782;};var if_res783 = loop1386(l11384,l21385);}var if_res784 = if_res783;} else {var if_res784 = gen_andmap(f1383,M0.list(l11384,l21385));}return if_res784;};var cl766 = $rjs_core.attachProcedureArity(function(f1391, l1392, ...args1393785) {if (arguments.length<2) {throw $rjs_core.racketContractError("arity mismatch");} else {}var args1393 = $rjs_core.Pair.listFromArray(args1393785);return gen_andmap(f1391,M0.cons(l1392,args1393));});var andmap1377 = $rjs_core.attachProcedureArity(function() {var fixed_lam767 = {'2':cl764,'3':cl765}[arguments.length];if (fixed_lam767!==undefined) {return fixed_lam767.apply(null,arguments);} else {if (M0.__gt__eq_(cl766.length,1)!==false) {var if_res768 = cl766.apply(null,arguments);} else {var if_res768 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res768;}},[M0.make_arity_at_least(2)]);var andmap2 = andmap1377;var cl786 = function(f1395, l1396) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res793 = true;} else {if (M0.procedure_p(f1395)!==false) {if (M0.procedure_arity_includes_p(f1395,1)!==false) {var if_res791 = M0.list_p(l1396);} else {var if_res791 = false;}var if_res792 = if_res791;} else {var if_res792 = false;}var if_res793 = if_res792;}if (if_res793!==false) {if (M0.null_p(l1396)!==false) {var if_res796 = false;} else {var loop1397 = function(l1398) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(M0.cdr(l1398))!==false) {var if_res795 = f1395(M0.car(l1398));} else {var r1399 = M0.cdr(l1398);var or_part1400 = f1395(M0.car(l1398));if (or_part1400!==false) {var if_res794 = or_part1400;} else {var if_res794 = loop1397(r1399);}var if_res795 = if_res794;}return if_res795;};var if_res796 = loop1397(l1396);}var if_res797 = if_res796;} else {var if_res797 = gen_ormap(f1395,M0.list(l1396));}return if_res797;};var cl787 = function(f1401, l11402, l21403) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res802 = true;} else {if (M0.procedure_p(f1401)!==false) {if (M0.procedure_arity_includes_p(f1401,2)!==false) {if (M0.list_p(l11402)!==false) {if (M0.list_p(l21403)!==false) {var if_res798 = M0.__eq_(M0.length(l11402),M0.length(l21403));} else {var if_res798 = false;}var if_res799 = if_res798;} else {var if_res799 = false;}var if_res800 = if_res799;} else {var if_res800 = false;}var if_res801 = if_res800;} else {var if_res801 = false;}var if_res802 = if_res801;}if (if_res802!==false) {if (M0.null_p(l11402)!==false) {var if_res805 = false;} else {var loop1404 = function(l11405, l21406) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(M0.cdr(l11405))!==false) {var if_res804 = f1401(M0.car(l11405),M0.car(l21406));} else {var r11407 = M0.cdr(l11405);var r21408 = M0.cdr(l21406);var or_part1409 = f1401(M0.car(l11405),M0.car(l21406));if (or_part1409!==false) {var if_res803 = or_part1409;} else {var if_res803 = loop1404(r11407,r21408);}var if_res804 = if_res803;}return if_res804;};var if_res805 = loop1404(l11402,l21403);}var if_res806 = if_res805;} else {var if_res806 = gen_ormap(f1401,M0.list(l11402,l21403));}return if_res806;};var cl788 = $rjs_core.attachProcedureArity(function(f1410, l1411, ...args1412807) {if (arguments.length<2) {throw $rjs_core.racketContractError("arity mismatch");} else {}var args1412 = $rjs_core.Pair.listFromArray(args1412807);return gen_ormap(f1410,M0.cons(l1411,args1412));});var ormap1394 = $rjs_core.attachProcedureArity(function() {var fixed_lam789 = {'2':cl786,'3':cl787}[arguments.length];if (fixed_lam789!==undefined) {return fixed_lam789.apply(null,arguments);} else {if (M0.__gt__eq_(cl788.length,1)!==false) {var if_res790 = cl788.apply(null,arguments);} else {var if_res790 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res790;}},[M0.make_arity_at_least(2)]);var ormap2 = ormap1394;var check_args = function(who1413, f1414, ls1415) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.procedure_p(f1414)!==false) {var if_res808 = M0.rvoid();} else {var if_res808 = M0.raise_argument_error(who1413,$rjs_core.UString.make("procedure?"),f1414);}if_res808;var loop1416 = function(prev_len1417, ls1418, i1419) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(ls1418)!==false) {var if_res812 = M0.rvoid();} else {var l1420 = M0.car(ls1418);if (M0.list_p(l1420)!==false) {var if_res809 = M0.rvoid();} else {var if_res809 = M0.raise_argument_error(who1413,$rjs_core.UString.make("list?"),l1420);}if_res809;var len1421 = M0.length(l1420);if (prev_len1417!==false) {var if_res810 = M0.not(M0.__eq_(len1421,prev_len1417));} else {var if_res810 = false;}if (if_res810!==false) {var if_res811 = M0.raise_arguments_error(who1413,$rjs_core.UString.make("all lists must have same size"),$rjs_core.UString.make("first list length"),prev_len1417,$rjs_core.UString.make("other list length"),len1421,$rjs_core.UString.make("procedure"),f1414);} else {var if_res811 = M0.rvoid();}if_res811;var if_res812 = loop1416(len1421,M0.cdr(ls1418),M0.add1(i1419));}return if_res812;};loop1416(false,ls1415,1);if (M0.procedure_arity_includes_p(f1414,M0.length(ls1415))!==false) {var if_res829 = M0.rvoid();} else {var let_result813 = M1.procedure_keywords(f1414);var required_keywords1422 = let_result813.getAt(0);var optional_keywords1423 = let_result813.getAt(1);if (M0.pair_p(required_keywords1422)!==false) {var if_res828 = M0.string_append($rjs_core.UString.make("argument mismatch;\n"),$rjs_core.UString.make(" the given procedure expects keyword arguments"));} else {var if_res828 = M0.string_append($rjs_core.UString.make("argument mismatch;\n"),$rjs_core.UString.make(" the given procedure's expected number of arguments does not match"),$rjs_core.UString.make(" the given number of lists"));}var temp827 = $rjs_core.UString.make("given procedure");var n1425 = M0.object_name(f1414);if (M0.symbol_p(n1425)!==false) {var if_res824 = M0.symbol__gt_string(n1425);} else {var if_res824 = false;}var or_part1424 = if_res824;if (or_part1424!==false) {var if_res825 = or_part1424;} else {var if_res825 = $rjs_core.UString.make("#<procedure>");}var temp826 = M0.unquoted_printing_string(if_res825);var a1426 = M0.procedure_arity(f1414);if (M0.pair_p(required_keywords1422)!==false) {var if_res823 = M0.rnull;} else {if (M0.integer_p(a1426)!==false) {var if_res822 = M0.list($rjs_core.UString.make("expected"),a1426);} else {if (M0.arity_at_least_p(a1426)!==false) {var if_res821 = M0.list($rjs_core.UString.make("expected"),M0.unquoted_printing_string(M0.string_append($rjs_core.UString.make("at least "),M0.number__gt_string(M0.arity_at_least_value(a1426)))));} else {var if_res821 = M0.rnull;}var if_res822 = if_res821;}var if_res823 = if_res822;}if (M0.pair_p(required_keywords1422)!==false) {var if_res820 = M0.rnull;} else {var if_res820 = M0.list($rjs_core.UString.make("given"),M0.length(ls1415));}if (M0.pair_p(required_keywords1422)!==false) {var temp818 = $rjs_core.UString.make("required keywords");var loop1427 = function(kws1428) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(kws1428)!==false) {var if_res817 = M0.rnull;} else {var if_res817 = M0.list_times_($rjs_core.UString.make(" "),M0.string_append($rjs_core.UString.make("#:"),M0.__rjs_quoted__.keyword__gt_string(M0.car(kws1428))),loop1427(M0.cdr(kws1428)));}return if_res817;};var if_res819 = M0.list(temp818,M0.unquoted_printing_string(M0.apply(M0.string_append,M0.cdr(loop1427(required_keywords1422)))));} else {var if_res819 = M0.rnull;}var w1429 = M0.quotient(M0.error_print_width(),M0.length(ls1415));if (M0.__gt_(w1429,10)!==false) {var temp815 = $rjs_core.UString.make("argument lists...");var loop1430 = function(ls1431) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(ls1431)!==false) {var if_res814 = M0.rnull;} else {var if_res814 = M0.cons(M0.string_append($rjs_core.UString.make("\n   "),M0.error_value__gt_string_handler()(M0.car(ls1431),w1429)),loop1430(M0.cdr(ls1431)));}return if_res814;};var if_res816 = M0.list(temp815,M0.unquoted_printing_string(M0.apply(M0.string_append,loop1430(ls1415))));} else {var if_res816 = M0.rnull;}var if_res829 = M0.apply(M0.raise_arguments_error,who1413,if_res828,temp827,temp826,M0.append(if_res823,if_res820,if_res819,if_res816));}return if_res829;};var gen_map = function(f1432, ls1433) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res830 = true;} else {var if_res830 = check_args($rjs_core.Symbol.make("map"),f1432,ls1433);}if_res830;var loop1434 = function(ls1435) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(M0.car(ls1435))!==false) {var if_res831 = M0.rnull;} else {var next_ls1436 = map2(M0.cdr,ls1435);var if_res831 = M0.cons(M0.apply(f1432,map2(M0.car,ls1435)),loop1434(next_ls1436));}return if_res831;};return loop1434(ls1433);};var gen_for_each = function(f1437, ls1438) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res832 = true;} else {var if_res832 = check_args($rjs_core.Symbol.make("for-each"),f1437,ls1438);}if_res832;var loop1439 = function(ls1440) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(M0.car(ls1440))!==false) {var if_res833 = M0.rvoid();} else {var next_ls1441 = map2(M0.cdr,ls1440);M0.apply(f1437,map2(M0.car,ls1440));var if_res833 = loop1439(next_ls1441);}return if_res833;};return loop1439(ls1438);};var gen_andmap = function(f1442, ls1443) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res834 = true;} else {var if_res834 = check_args($rjs_core.Symbol.make("andmap"),f1442,ls1443);}if_res834;var loop1444 = function(ls1445) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(M0.car(ls1445))!==false) {var if_res837 = true;} else {if (M0.null_p(M0.cdar(ls1445))!==false) {var if_res836 = M0.apply(f1442,map2(M0.car,ls1445));} else {var next_ls1446 = map2(M0.cdr,ls1445);if (M0.apply(f1442,map2(M0.car,ls1445))!==false) {var if_res835 = loop1444(next_ls1446);} else {var if_res835 = false;}var if_res836 = if_res835;}var if_res837 = if_res836;}return if_res837;};return loop1444(ls1443);};var gen_ormap = function(f1447, ls1448) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res838 = true;} else {var if_res838 = check_args($rjs_core.Symbol.make("ormap"),f1447,ls1448);}if_res838;var loop1449 = function(ls1450) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(M0.car(ls1450))!==false) {var if_res841 = false;} else {if (M0.null_p(M0.cdar(ls1450))!==false) {var if_res840 = M0.apply(f1447,map2(M0.car,ls1450));} else {var next_ls1451 = map2(M0.cdr,ls1450);var or_part1452 = M0.apply(f1447,map2(M0.car,ls1450));if (or_part1452!==false) {var if_res839 = or_part1452;} else {var if_res839 = loop1449(next_ls1451);}var if_res840 = if_res839;}var if_res841 = if_res840;}return if_res841;};return loop1449(ls1448);};M0.rvoid();var __rjs_quoted__ = {};export { __rjs_quoted__,ormap2 as ormap,andmap2 as andmap,for_each2 as for_each,map2 as map };