const API_BASE_URL = 'https://rebrickable.com/api/v3/lego';
const API_KEY = '59fb97e709c9d9d94e40c5c62c838337';

const apiUrl = (path, params) => 
{
  const host = API_BASE_URL;
  const datapath = path;

  const url = new URL(host + datapath);

  url.searchParams.append('key', API_KEY); 

  for(const prop in params)
    url.searchParams.append(prop, params[prop]); 

  console.log(url.href);

  return url;
};

export const newSearch = async (section, query) => 
{
    const info = apiUrl(section, query);

    const response = await fetch(info);

    const {results} = await response.json();

    return results;
};