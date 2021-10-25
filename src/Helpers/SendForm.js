const sendForm = (name, email, message, setModalOpen, setIsSend, clear) => {
  const data = [name, email, message];
  if (!data.some((e) => e === "")) {
    setModalOpen(true);
    setIsSend("sending");

    fetch("https://formsubmit.co/ajax/e99fd84a8049556e69c81a42dc5593b7", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        message,
        enviado: "se envio de chrisrol.xyz",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsSend("success");
          clear();
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSend("fail");
      });
    return true;
  }
  return false;
};

export default sendForm;
