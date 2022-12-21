import Cookies from 'js-cookie'; 

// custom fetch function used lieu of default fetch function in order to handle non-GET requests
export async function csrfFetch(url, options = {}) { 
    // set options.method to 'GET' if there is no method
    options.method = options.method || 'GET'; 
    // set options.headers to an empty object if there is no headers
    options.headers = options.headers || {}; 

    // for non-GET fetch requests, the 'XSRF-Token' header should be set with a value of the 'XSRF-TOKEN' cookie
    if (options.method.toUpperCase() !== 'GET') { 
        options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json'; 
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN'); 
    }

    // call the default window's fetch with the url and the options passed
    const res = await window.fetch(url, options); 

    // if thr response status code is 400 or above, throw an error with the response. 
    if (res.status >= 400) throw res;  

    // if the response status code is under 400, then return the response to the next promise chain
    return res; 

}

// custom csrfFetch function - to be used to add XSRF-TOKEN cookie while in development
export function restoreCSRF() { 
    return csrfFetch('/api/csrf/restore'); 
}
