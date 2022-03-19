export async function endPointCallCreator({
    url,
    method = "GET",
    body = null,
  } = {}) {
    let options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
    };
    // if contain body
    if (body) {
      options = { ...options, body: JSON.stringify(body) };
    }
  
    try {
      const response = await fetch(url, options);
      const result = await response.json(response);

      return response.ok
        ? { success: true, loading: false, payload: result }
        : {
            success: false,
            loading: false,
            payload: null,
            message: "Some Thing Went Wrong",
          };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        loading: false,
        payload: null,
        message: "Internal Server Error",
      };
    }
  }

  export function formatCardsValue(cardValue) {
    const cardsValue = {
      KING: 13,
      QUEEN: 12,
      JACK: 11,
      10: 10,
      9: 9,
      8: 8,
      7: 7,
      6: 6,
      5: 5,
      4: 4,
      3: 3,
      2: 2,
      ACE: 1,
    };
    return cardsValue[cardValue];
  }