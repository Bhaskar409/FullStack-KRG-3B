  let balance = 1000;
    const balanceEl = document.getElementById("balance");
    const amountInput = document.getElementById("amount");
    const messageEl = document.getElementById("message");

    function deposit() {
      const amount = parseFloat(amountInput.value);
      if (isNaN(amount) || amount <= 0) {
        showMessage(" Enter a valid deposit amount", "error");
        return;
      }
      balance += amount;
      updateBalance();
      showMessage(` Deposited $${amount.toFixed(2)}`, "success");
      amountInput.value = "";
    }

    function withdraw() {
      const amount = parseFloat(amountInput.value);
      if (isNaN(amount) || amount <= 0) {
        showMessage(" Enter a valid withdrawal amount", "error");
        return;
      }
      if (amount > balance) {
        showMessage(" Insufficient balance", "error");
        return;
      }
      balance -= amount;
      updateBalance();
      showMessage(` Withdrawn $${amount.toFixed(2)}`, "success");
      amountInput.value = "";
    }

    function updateBalance() {
      balanceEl.textContent = balance.toFixed(2);
    }

    function showMessage(msg, type) {
      messageEl.textContent = msg;
      messageEl.className = `message ${type}`;
    }
