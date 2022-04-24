﻿# await-to.js
 用法:
async function func3(){
	const promise = Promise.reject({ error: 'Error message' });
	const [err, data] = await to(promise, {extraKey: 1});
	console.log(err, data)
	// {error: 'Error message', extraKey: 1}  undefined
}
func3()
