export default function convertData(dataObjFromNewsApi) {
    try {
      const {
        description,
        publishedAt,
        source,
        title,
        url,
        urlToImage,
        searchPhrase,
      } = dataObjFromNewsApi;

      const dataObj = {
        _id: url,
        keyword: searchPhrase,
        title,
        link: url,
        text: description,
        image: urlToImage,
        date: publishedAt,
        source: source.name,
      };
      return dataObj;
    } catch (error) {
      throw new Error('Пришли невалидные данные от NewsApi');
    }
  }