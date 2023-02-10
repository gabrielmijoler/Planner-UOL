  const getBackgroundColor = (dayName:string) => {
    let backgroundColor;
    switch (dayName) {
      case 'Monday':
        backgroundColor = "#FF0024";
        break;
      case 'Tuesday':
        backgroundColor = "#FF8000";
        break;
      case 'Wednesday':
        backgroundColor = "#FFCE00";
        break;
      case 'Thursday':
        backgroundColor = "rgba(255, 0, 36, 0.7)";
        break;
      case 'Friday':
        backgroundColor = "rgba(255, 128, 0, 0.7)";
        break;
      case 'Saturday':
        backgroundColor = "rgba(255, 206, 0, 0.7)";
        break;
      case 'Sunday':
        backgroundColor = "rgba(255, 0, 36, 0.5)";
        break;
      default:
        backgroundColor = "white";
    }
    return { backgroundColor: backgroundColor };
  };

export {getBackgroundColor};