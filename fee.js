function estimateTransactionFee(amountToSend) {
    const rate = 0.015;
    const minFee = 10;
    const maxFee = 70;
  
    let fee = amountToSend * rate;
    if (fee < minFee) {
      fee = minFee;
    } else if (fee > maxFee) {
      fee = maxFee;
    }
  
    const total = amountToSend + fee;
  
    return (
        `Sending KES ${amountToSend}:\n` +
        `Calculated Transaction Fee: KES ${fee}\n` +
        `Total amount to be debited: KES ${total}\n` +
        `Send Money Securely!`
      );
  }
  


  console.log(estimateTransactionFee(2000))


