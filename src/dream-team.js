module.exports = function createDreamTeam(members) {
    let names = [];  
    if (Array.isArray(members) === false) return false;  
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
            names.push(members[i].trim()[0].toUpperCase());
        }
    } 
    return names.sort().join('');
  };