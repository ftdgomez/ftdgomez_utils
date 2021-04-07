
> ftdgomez-utils@2.4.0 generate:docs
> jsdoc2md "methods.js"

## Functions

<dl>
<dt><a href="#isString">isString(operator)</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
<dt><a href="#isAccepted">isAccepted(operator)</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
<dt><a href="#oneOf">oneOf(operator, values)</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
<dt><a href="#isNumber">isNumber(operator)</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
<dt><a href="#isDate">isDate(operator)</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
<dt><a href="#isEmail">isEmail(operator)</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
<dt><a href="#isVzlaRif">isVzlaRif(operator)</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
<dt><a href="#isVzlaPhone">isVzlaPhone(operator)</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
<dt><a href="#passwordEval">passwordEval(operator)</a> ⇒ <code>Number</code></dt>
<dd></dd>
<dt><a href="#isArrayOf">isArrayOf(operator, type)</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
<dt><a href="#isArray">isArray(operator)</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
</dl>

<a name="isString"></a>

## isString(operator) ⇒ <code>Boolean</code>
**Kind**: global function  
**Returns**: <code>Boolean</code> - return true if operator is type String  

| Param | Type |
| --- | --- |
| operator | <code>any</code> | 

<a name="isAccepted"></a>

## isAccepted(operator) ⇒ <code>Boolean</code>
**Kind**: global function  
**Returns**: <code>Boolean</code> - return true if operator is one of 'yes' | 'on' | 1 | true  

| Param | Type |
| --- | --- |
| operator | <code>any</code> | 

<a name="oneOf"></a>

## oneOf(operator, values) ⇒ <code>Boolean</code>
**Kind**: global function  
**Returns**: <code>Boolean</code> - return true if operator is one of the values  

| Param | Type |
| --- | --- |
| operator | <code>any</code> | 
| values | <code>Array</code> | 

<a name="isNumber"></a>

## isNumber(operator) ⇒ <code>Boolean</code>
**Kind**: global function  
**Returns**: <code>Boolean</code> - true if operator is a number  

| Param | Type |
| --- | --- |
| operator | <code>any</code> | 

<a name="isDate"></a>

## isDate(operator) ⇒ <code>Boolean</code>
**Kind**: global function  
**Returns**: <code>Boolean</code> - true if operator is a valid Date format  

| Param | Type |
| --- | --- |
| operator | <code>any</code> | 

<a name="isEmail"></a>

## isEmail(operator) ⇒ <code>Boolean</code>
**Kind**: global function  
**Returns**: <code>Boolean</code> - true if the operator has email format  

| Param | Type |
| --- | --- |
| operator | <code>\*</code> | 

<a name="isVzlaRif"></a>

## isVzlaRif(operator) ⇒ <code>Boolean</code>
**Kind**: global function  
**Returns**: <code>Boolean</code> - true if operator has Venezuelan Rif format  

| Param | Type |
| --- | --- |
| operator | <code>\*</code> | 

<a name="isVzlaPhone"></a>

## isVzlaPhone(operator) ⇒ <code>Boolean</code>
**Kind**: global function  
**Returns**: <code>Boolean</code> - true if operator has Venezuela phone format  

| Param | Type |
| --- | --- |
| operator | <code>\*</code> | 

<a name="passwordEval"></a>

## passwordEval(operator) ⇒ <code>Number</code>
**Kind**: global function  
**Returns**: <code>Number</code> - score between 0 and 5  

| Param | Type |
| --- | --- |
| operator | <code>\*</code> | 

<a name="isArrayOf"></a>

## isArrayOf(operator, type) ⇒ <code>Boolean</code>
**Kind**: global function  
**Returns**: <code>Boolean</code> - true if operator is and array of "type"  

| Param | Type |
| --- | --- |
| operator | <code>\*</code> | 
| type | <code>\*</code> | 

<a name="isArray"></a>

## isArray(operator) ⇒ <code>Boolean</code>
**Kind**: global function  
**Returns**: <code>Boolean</code> - true if operator is an array  

| Param | Type |
| --- | --- |
| operator | <code>\*</code> | 

