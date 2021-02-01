export function atobUnicode(str) {
	return decodeURIComponent(atob(str).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
}

export function tabsFromPackage(pkg) {
	return {
		"git": pkg.git,
		"submodules": pkg.git ? `git submodule add ${pkg.git} ${pkg.name}` : undefined,
		"clone": pkg.git ? `git clone ${pkg.git}` : undefined,
		"zkg": `zkg add ${pkg.name}`,
		"zigmod": `# Requires v26 or later\nzigmod zpm add ${pkg.name}`,
	};
}

export default { atobUnicode, tabsFromPackage };
