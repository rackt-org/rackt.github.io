import * as $rjs_core from './core.js';import * as M0 from "./lib.rkt.js";import * as M2 from "./syntax.rkt.js";var variable_reference_from_unsafe_p = function(v674) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return false;};var variable_reference_constant_p = function(v675) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return false;};var make_instance = M0.Core.Linklet.makeInstance;var instance_data = M0.Core.Linklet.instanceData;var instance_name = M0.Core.Linklet.instanceName;var instance_variable_value = M0.Core.Linklet.instanceVariableValue;var instance_variable_names = M0.Core.Linklet.instanceVariableNames;var instance_set_variable_value_bang_ = M0.Core.Linklet.instanceSetVariableValue;var instance_unset_variable_bang_ = M0.Core.Linklet.instanceUnsetVariable;var instance_describe_variable_bang_ = M0.Core.Linklet.instanceDescribeVariable;var linklet_virtual_machine_bytes = function() {if (arguments.length!==0) {throw $rjs_core.racketContractError("arity mismatch");} else {}return $rjs_core.Bytes.fromIntArray([114,97,99,107,101,116,115,99,114,105,112,116]);};var primitive_table = function(v676) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return M0.Core.Hash.makeEqual([[$rjs_core.Symbol.make("syntax?"),M2.__rjs_quoted__.syntax_p],[$rjs_core.Symbol.make("syntax-e"),M2.__rjs_quoted__.syntax_e],[$rjs_core.Symbol.make("datum->syntax"),M2.__rjs_quoted__.datum__gt_syntax],[$rjs_core.Symbol.make("syntax->datum"),M2.__rjs_quoted__.syntax__gt_datum],[$rjs_core.Symbol.make("syntax-property"),M2.__rjs_quoted__.syntax_property],[$rjs_core.Symbol.make("syntax-property-symbol-keys"),M2.__rjs_quoted__.syntax_property_symbol_keys],[$rjs_core.Symbol.make("syntax-source"),M2.__rjs_quoted__.syntax_source],[$rjs_core.Symbol.make("syntax-line"),M2.__rjs_quoted__.syntax_line],[$rjs_core.Symbol.make("syntax-column"),M2.__rjs_quoted__.syntax_column],[$rjs_core.Symbol.make("syntax-span"),M2.__rjs_quoted__.syntax_span],[$rjs_core.Symbol.make("syntax-position"),M2.__rjs_quoted__.syntax_position],[$rjs_core.Symbol.make("variable-reference-constant?"),variable_reference_constant_p],[$rjs_core.Symbol.make("variable-reference-from-unsafe?"),variable_reference_from_unsafe_p],[$rjs_core.Symbol.make("make-instance"),make_instance],[$rjs_core.Symbol.make("instance-describe-variable!"),instance_describe_variable_bang_],[$rjs_core.Symbol.make("instance-unset-variable!"),instance_unset_variable_bang_],[$rjs_core.Symbol.make("instance-set-variable-value!"),instance_set_variable_value_bang_],[$rjs_core.Symbol.make("instance-variable-names"),instance_variable_names],[$rjs_core.Symbol.make("instance-variable-value"),instance_variable_value],[$rjs_core.Symbol.make("instance-data"),instance_data],[$rjs_core.Symbol.make("instance-name"),instance_name],[$rjs_core.Symbol.make("linklet-virtual-machine-bytes"),linklet_virtual_machine_bytes],[$rjs_core.Symbol.make("primitive-table"),primitive_table]],false);};var __rjs_quoted__ = {};export { __rjs_quoted__,variable_reference_from_unsafe_p,variable_reference_constant_p,make_instance,instance_data,instance_name,instance_variable_value,instance_variable_names,instance_set_variable_value_bang_,instance_unset_variable_bang_,instance_describe_variable_bang_,linklet_virtual_machine_bytes,primitive_table };