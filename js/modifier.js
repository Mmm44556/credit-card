const cardForm = document.getElementById('card-form');
const keys = {
  'card-name':'卡片名稱',
  'card-number':'**** **** ****',
  'card-holder':'XXX',
  'card-cvc': '---',
  'card-month':'00',
  'card-year':'00'

}
cardForm.addEventListener('input', (evt) => {
  //表單輸入修改卡片內容
  let id = evt.target.id;
  let idSplit = id.split('-');
  const currentField = document.getElementById(`${idSplit[0]}-${idSplit[2]}`);
  currentField.innerText = evt.target.value;

  //重置卡片預設值
  if (evt.target.value.length===0){
    currentField.innerText = keys[`${idSplit[0]}-${idSplit[2]}`];
  }
})

