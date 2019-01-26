var myUI;

myUI = {
	init: () => {
        myUI.loadout();
	},
	loadout: () => {
		var div = createEle("div");

        div.innerHTML = tiger[0]

		animalgame.appendChild(div);
	}
};
window.onload = () => {
	myUI.init();
};