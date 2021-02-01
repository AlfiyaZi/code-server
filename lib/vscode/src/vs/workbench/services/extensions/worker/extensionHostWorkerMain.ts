/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

(function () {

	let MonacoEnvironment = (<any>self).MonacoEnvironment;
	let monacoBaseUrl = MonacoEnvironment && MonacoEnvironment.baseUrl ? MonacoEnvironment.baseUrl : '../../../../../';

	const trustedTypesPolicy = self.trustedTypes?.createPolicy('amdLoader', { createScriptURL: value => value });

	if (typeof (<any>self).define !== 'function' || !(<any>self).define.amd) {
		let loaderSrc: string | TrustedScriptURL = monacoBaseUrl + 'vs/loader.js';
		if (trustedTypesPolicy) {
			loaderSrc = trustedTypesPolicy.createScriptURL(loaderSrc);
		}
		importScripts(loaderSrc as string);
	}

	require.config({
		baseUrl: monacoBaseUrl,
		catchError: true,
<<<<<<< HEAD
		createTrustedScriptURL: (value: string) => value,
		paths: {
			'@coder/node-browser': `../node_modules/@coder/node-browser/out/client/client.js`,
			'@coder/requirefs': `../node_modules/@coder/requirefs/out/requirefs.js`,
		}
=======
		trustedTypesPolicy
>>>>>>> 2723b81c450718fecd5f71ccf1ec9945bdb5adbc
	});

	require(['vs/workbench/services/extensions/worker/extensionHostWorker'], () => { }, err => console.error(err));
})();
