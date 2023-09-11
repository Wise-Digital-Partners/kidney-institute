export function isDialysisActive(currentOption) {
  if (currentOption === "dialysis-clinic") {
    return true;
  } else {
    return false;
  }
}

export function isNephrologyActive(currentOption) {
  if (currentOption === "nephrology-office") {
    return true;
  } else {
    return false;
  }
}

export function isNoneActive(currentOption) {
  if (currentOption === "") {
    return true;
  } else {
    return false;
  }
}
