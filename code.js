function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function AparatureScience() {
  const btn = document.getElementById("buttonyes");

  btn.innerHTML = "ATTENTION";
  await wait(750);

  btn.innerHTML = "THE";
  await wait(750);

  btn.innerHTML = "DARK";

  await wait(250);

  btn.innerHTML = "MATTER";

  await wait(250);

  btn.innerHTML = "REACTOR (DMR)";

  await wait(250);

  btn.innerHTML = "WILL EXPLODE";

  await wait(325);

  btn.innerHTML = "IN";

  await wait(275);

  btn.innerHTML = "T-MINUS";

  await wait(375);

  btn.innerHTML = "5 MINUTES.";

  await wait(750);

  btn.innerHTML = "THE OPTION";

  await wait(325);

  btn.innerHTML = "TO";

  await wait(225);

  btn.innerHTML = "OVERRIDE";

  await wait(350);

  btn.innerHTML = "DETONATION";

  await wait(375);

  btn.innerHTML = "HAS";

  await wait(250);

  btn.innerHTML = "EXPIRED";
}

