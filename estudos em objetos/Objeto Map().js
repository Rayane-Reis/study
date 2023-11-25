    // MAP -> mapear MAPA
    
    // suponha que eu quero passar o id como uma chave com id, nessa ordem 3,2,1
    const pessoas = [
        { id: 3, nome: 'rayane'},
        { id: 2, nome: 'programadora'},
        { id: 1, nome: 'linda'},
    ];
    
    // nesse código ele fica em ordem crescente e o id fica com string

    // const np = {}; 

    // for(const pessoa of pessoas){
    //     const { id } = pessoa;
    //     np[id] = { ...pessoa };
    // }

    // para colocar uma ordem basta mapear com new Map 

    const np = new Map(); 

    for(const pessoa of pessoas){
        const { id } = pessoa;
        np.set (id, { ...pessoa }); // setando o valor 
    }

    console.log(np);

    // deletando a pessoa 3

    np.delete(3);
    console.log(np)

    // ver os dados da pessoa com o id 2

    console.log(np.get(2)); // get para obter o valor do set 

    // LER DOCUMENTAÇÃO DO MAP