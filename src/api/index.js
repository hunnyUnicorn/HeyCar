const getUsers = async () => {
  /*const response = await fetch('http://178.63.13.157:8090/mock-api/api/users', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  let users = await response.json();*/
  let users = {data:[{firstName:'Joe', secondName:'Dae'}]};
  return users;
}

const getProjects = async () => {
  // const response = await fetch('http://178.63.13.157:8090/mock-api/api/projects', {
  //   method: 'GET',
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8'
  //   }
  // })
  // let projectData = await response.json().data;
  const projectList = {"code":"200","data":[{"projectId":"bgYhx","userIds":["rahej"],"rule":"Manual Selection","gatewayIds":["gDJ2s"],"structure":"Sole proprietorship","industry":"IT","website":"https://mvpmatch.co/","description":"Sit amet luctus venenatis lectus magna fringilla urna porttitor.","image":"https://mvpmatch.co/images/logo.svg","name":"Project 1"},{"projectId":"ERdPQ","userIds":["rahej"],"rule":"Manual Selection","gatewayIds":["WU50G"],"structure":"Partnership","industry":"IT","website":"https://mvpmatch.co/","description":"Sit amet luctus venenatis lectus magna fringilla urna porttitor.","image":"https://mvpmatch.co/images/logo.svg","name":"Project 2"}],"error":null}.data;
  let projectData = projectList;
  let projects = [];
  if ( projectData && projectData.length > 0 ) {
    projectData.map( (project) => {
      projects = [...projects, {name: project.name, id: project.projectId}];
    })
  }
  return [{name: 'All Projects', id: ''}, ...projects ];
}

const getGateways = async () => {
  // const response = await fetch('http://178.63.13.157:8090/mock-api/api/gateways', {
  //   method: 'GET',
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8'
  //   }
  // })
  // let gatewayData = await response.json().data;
  const gatewayList = {"code":"200","data":[{"gatewayId":"i6ssp","userIds":["rahej"],"name":"Gateway 1","type":"Stripe","apiKey":"sk_test_6eC49HqLyjWDarjtT1zdp7dc","secondaryApiKey":"","description":"Sit amet luctus venenatis lectus magna fringilla urna porttitor."},{"gatewayId":"GzFF8","userIds":["rahej"],"name":"Gateway 2","type":"Stripe","apiKey":"sk_test_6eC49HqLyVsDarUjT1zdp2hz","secondaryApiKey":"","description":"Pulvinar elementum integer enim neque volutpat ac tincidunt vitae."}],"error":null}.data;
  let gatewayData = gatewayList
  let gateways = [];
  if ( gatewayData && gatewayData.length > 0 ) {
    gatewayData.map( (gateway) => {
      gateways = [...gateways, {name: gateway.name, id: gateway.gatewayd}];
    })
  }
  return [{name: 'All Gateways', id: ''}, ...gateways ];
}

const getReports = async (fromDate, toDate, selectedProject, selectedGateway) => {
  /*const response = await fetch('http://178.63.13.157:8090/mock-api/api/report', {
    method: 'POST',
    body: JSON.stringify({
      from: fromDate,
      to: toDate,
      projectId: selectedProject,
      gatewayId: selectedGateway
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  const reportData = await response.json().data;*/
  
  const reportData = {"code":"200","data":[{"paymentId":"6149cf568b0a15b105ea1786","amount":2493.1,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-06-22","created":"2021-07-29"},{"paymentId":"6149cf568bfadcecbf2b40ec","amount":1318.44,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-02-18","created":"2021-06-05"},{"paymentId":"6149cf56c04649c6dde1057b","amount":3398.51,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-05-23","created":"2021-06-06"},{"paymentId":"6149cf5659eb162d700d9403","amount":2204.65,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-04-30","created":"2021-04-20"},{"paymentId":"6149cf56e67d1768eea05ea4","amount":2758.18,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-06-20","created":"2021-07-18"},{"paymentId":"6149cf564334774f024da96e","amount":304.3,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-03-07","created":"2021-09-16"},{"paymentId":"6149cf56eb8ec0be21f1431f","amount":841.99,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-03-26","created":"2021-08-24"},{"paymentId":"6149cf565ffcba7981884b64","amount":2599.56,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-07-10","created":"2021-08-09"},{"paymentId":"6149cf562c4ed36dd2b057ba","amount":2799.11,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-08-27","created":"2021-05-16"},{"paymentId":"6149cf5652a987b45705e45d","amount":2707.16,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-08-29","created":"2021-03-28"},{"paymentId":"6149cf567362fec31c1df651","amount":212.06,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-07-24","created":"2021-09-09"},{"paymentId":"6149cf5636d7cbd8dcacd9d5","amount":3473.02,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-03-31","created":"2021-03-09"},{"paymentId":"6149cf565c6b3a6eca9d420e","amount":3339.14,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-08-03","created":"2021-07-07"},{"paymentId":"6149cf56adf722884f0d339f","amount":1990.45,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-08-21","created":"2021-09-20"},{"paymentId":"6149cf564037d21d93abab58","amount":3012.43,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-04-15","created":"2021-04-24"},{"paymentId":"6149cf5612c35c49c663a15c","amount":1659.95,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-03-21","created":"2021-07-24"},{"paymentId":"6149cf56974e74f0867b0a9a","amount":811.97,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-04-25","created":"2021-06-14"},{"paymentId":"6149cf56574465544b98a5b7","amount":3862.75,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-03-17","created":"2021-05-27"},{"paymentId":"6149cf56bc0b3e1f59666b20","amount":328.53,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-08-09","created":"2021-06-09"},{"paymentId":"6149cf56f8be8085708fbae7","amount":56.19,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-08-01","created":"2021-08-16"},{"paymentId":"6149cf562766867cfcb9234d","amount":3508.62,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-02-01","created":"2021-02-24"},{"paymentId":"6149cf567d8f7e0e27748094","amount":1053.5,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-02-10","created":"2021-03-03"},{"paymentId":"6149cf563b647833c9d1a9f2","amount":947.03,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-03-01","created":"2021-02-18"},{"paymentId":"6149cf5670670ed1a606acaf","amount":3184.76,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-04-02","created":"2021-09-03"},{"paymentId":"6149cf5665b9e1243ec9a07b","amount":164.07,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-08-21","created":"2021-02-06"},{"paymentId":"6149cf56902014afc0b791ee","amount":1376.18,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-02-27","created":"2021-08-16"},{"paymentId":"6149cf5685e9315f3c0b0367","amount":174.48,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-05-18","created":"2021-03-04"},{"paymentId":"6149cf560ffe4d1389d212de","amount":3112.96,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-04-09","created":"2021-03-14"},{"paymentId":"6149cf56160464671d126a21","amount":3110.66,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-03-21","created":"2021-09-02"},{"paymentId":"6149cf565e924c440b917f36","amount":366.46,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-03-22","created":"2021-03-22"},{"paymentId":"6149cf5636d24bcccf5a67cf","amount":1397.22,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-06-24","created":"2021-08-08"},{"paymentId":"6149cf56f09713bd9be1941e","amount":1141.14,"projectId":"bgYhx","gatewayId":"i6ssp","userIds":["rahej"],"modified":"2021-09-08","created":"2021-02-20"}],"error":null}.data;
  return reportData;
}
export {
    getUsers,
    getProjects,
    getGateways,
    getReports
}
