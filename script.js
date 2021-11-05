function verificar() {
  const date = new Date();
  const year = date.getFullYear();
  const fano = document.getElementById('txtano');
  const res = document.getElementById('res');
  if (fano.value.length == 0 || fano.value > year) {
    alert('Verifique os dados e tente novamente');
  } else {
    const idade = year - fano.value;
    // const fsexo = document.getElementsByName('sexo');
    // for (let i = 0; i < fsexo.length; i++) {
    //   if (fsexo[0].checked) {
    //     genero = 'Homem';
    //   } else {
    //     genero = 'Mulher';
    //   }
    detSexo();

    res.style.textAlign = 'center';
    res.innerHTML = `Trata-se de ${genero} com ${idade} anos.`;
  }
}

const detSexo = function sexo() {
  const fsexo = document.getElementsByName('sexo');
  for (let i = 0; i < fsexo.length; i++) {
    if (fsexo[0].checked) {
      genero = 'Homem';
    } else {
      genero = 'Mulher';
    }
  }
};
