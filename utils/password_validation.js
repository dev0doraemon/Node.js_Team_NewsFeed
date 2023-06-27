const pw_validation_check = (password) => {
    const pw_validation = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    return pw_validation.test(password);
  };

module.exports = pw_validation_check;

  // /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
  
  // ^ : 문자열의 시작을 나타냅니다.
  // (?=.*\d) : 문자열에 숫자가 적어도 1개 이상 포함되어야 함을 나타냅니다.
  // (?=.*[a-zA-Z]) : 문자열에 영문자가 적어도 1개 이상 포함되어야 함을 나타냅니다.
  // (?=.*[\W_]) : 문자열에 특수문자가 적어도 1개 이상 포함되어야 함을 나타냅니다.
  // [a-zA-Z0-9\W_]{8,15} : 영문, 숫자, 특수문자 조합으로 이루어진 8~15자의 문자열을 나타냅니다.
  // $ : 문자열의 끝을 나타냅니다.
  // [!@#$%^*+=-] 이 부분이 특수문자까지 허용됩니다.

