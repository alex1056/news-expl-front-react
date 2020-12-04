export default function convertData(dataObjFromNewsApi) {
  // console.log(dataObjFromNewsApi);  
  try {
      const {
        description,
        publishedAt,
        source,
        title,
        url,
        urlToImage,
        searchPhrase,
        userSaved,
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
        userSaved,
      };
      return dataObj;
    } catch (error) {
      throw new Error('Пришли невалидные данные от NewsApi');
    }
  }