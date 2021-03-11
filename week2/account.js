var accountInfoList = [];
var i = 0;

var create = function account() {

	createAccount();

	function newAccount(name, balance) {
		this.name = name;
		this.balance = balance;
	}
	
	function display(i) {
		document.getElementById("text").innerHTML += "Account name: " + accountInfoList[i].name
			+ "    Balance: " + accountInfoList[i].balance + "\n";
	}

	function createAccount() {
		var name = document.getElementById("name").value;
		var balance = document.getElementById("depo").value;
		var newAcc = new newAccount(name, balance);
		accountInfoList[i] = newAcc;
		display(i);
		i++;
	}
}

window.onload = () => document.getElementById("new").onclick = create;
