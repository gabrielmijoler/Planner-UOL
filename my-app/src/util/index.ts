  const getBackgroundColor = (dayName:string) => {
    let backgroundColor;
    switch (dayName) {
      case 'monday':
        backgroundColor = "#FF0024";
        break;
      case 'tuesday':
        backgroundColor = "#FF8000";
        break;
      case 'wednesday':
        backgroundColor = "#FFCE00";
        break;
      case 'thursday':
        backgroundColor = "rgba(255, 0, 36, 0.7)";
        break;
      case 'friday':
        backgroundColor = "rgba(255, 128, 0, 0.7)";
        break;
      case 'saturday':
        backgroundColor = "rgba(255, 206, 0, 0.7)";
        break;
      case 'sunday':
        backgroundColor = "rgba(255, 0, 36, 0.5)";
        break;
      default:
        backgroundColor = "white";
    }
    return { backgroundColor: backgroundColor };
  };

export {getBackgroundColor};