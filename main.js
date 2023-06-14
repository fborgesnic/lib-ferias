class Vacation {
  constructor(type) {
    if (!type) {
      throw new TypeError("type must be specified");
    }

    if (type !== "integral" && type !== "partial") {
      throw new TypeError("type must be integral or partial");
    }

    this.type = type;
  }

  get numberOfDays() {
    switch (this.type) {
      case "integral":
        return 30;
      case "partial":
        return 15;
    }
  }
}

export { Vacation };
