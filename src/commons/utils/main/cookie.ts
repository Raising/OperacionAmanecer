export default {
  get: function (propName: string) {
    const name = propName + '=',
      ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return '';
  },

  set: function (propName: string, propValue: string, exdate: string) {
    const d = new Date(parseInt(exdate) || 0),
      path = 'path=/';
    let domain = 'domain=',
      expires = 'expires=';
    expires = expires.concat(d.toUTCString());
    domain = domain.concat(this.extractDomain(document.location.hostname));

    document.cookie = propName.concat(
      '=',
      encodeURIComponent(propValue),
      exdate ? '; ' : '',
      exdate ? expires : '',
      '; ',
      domain,
      '; ',
      path,
    );
  },
  extractDomain: function (url: string) {
    let domain;
    if (url.indexOf('://') > -1) {
      domain = url.split('/')[2];
    } else {
      domain = url.split('/')[0];
    }
    domain = domain.split(':')[0];

    const subdomain = domain.split('.');
    if (subdomain.length > 2) {
      domain = subdomain[subdomain.length - 2].concat('.', subdomain[subdomain.length - 1]);
    }

    return domain;
  },

  //   updateExpiration: function(exSessionDate: string, exLongDate: string, sessionCookies: any) {
  //     let cookies = document.cookie.split('; ');
  //     cookies = _.without(cookies, 'i18next=es');
  //     _.each(cookies, (cookie: string) => {
  //       let item = cookie.split('=');
  //       let exdate = sessionCookies && sessionCookies.indexOf(item[0]) != -1 ? exSessionDate : exLongDate;
  //       this.set(item[0], item[1], exdate);
  //     });
  //   },
};
