class Github{

  constructor(){

    this.client_id = '30745bbcc72a7054cdf0';
    this.client_secret = 'f33d1bf12c9eb1d8fde5ad4dd65ca820bff2d4ae';
  }

  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();

    console.log("Profile "+profile);

    return{
      profile
    }
  }
}