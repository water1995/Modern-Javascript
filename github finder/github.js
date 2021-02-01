class Github{

  constructor(){

    this.client_id ='30745bbcc72a7054cdf0';
    this.client_secret = '6a0c365fc61fa4893de6b1018e24e8441befca97';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }

  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    console.log("Profile "+profile);

    return{
      profile,repos
    }
  }
}
