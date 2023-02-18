url = 'https://www.anapioficeandfire.com/api'
let oldText;

async function api() {

    let a = fetch('https://anapioficeandfire.com/api');
    let out = await a;
    let prom = out.json();
    let out0 = await prom;
    // console.log(out0);

    url1 = out0.books;
    let books = fetch(url1);
    let out1 = await books;
    let books1 = await out1.json();
    // console.log(books1);

    let parent_main = document.querySelector('body');

    let heading = document.createElement('h2');
    heading.setAttribute('id', 'title');
    heading.classList.add("text-center");
    heading.innerHTML = "ICE AND FIRE";
    parent_main.append(heading);


    let content = document.createElement('div');
    content.classList.add("input-group");

    let search = document.createElement('div');
    search.classList.add("form-outline");

    let data = document.createElement('input');
    data.setAttribute('type', 'search');
    data.classList.add('form-control')
    data.setAttribute('placeholder', 'Search');
    data.setAttribute('id','form1')
    search.append(data);

    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('onclick', "highlight('0')")
    button.classList.add('btn', 'btn-dark');
    button.innerText = 'Search'

    
    content.append(search);
    content.append(button);
   
    parent_main.append(content)

    let space2 = document.createElement('br');
    parent_main.append(space2)

    let parent = document.createElement('div');
    parent.classList.add("container");


    let num = 1
    for (let i = 0; i < books1.length; i += 2) {

        try {

            book_url = fetch(`https://anapioficeandfire.com/api/books/${num}`);
            output = await book_url;
            book_detail = await output.json();
            console.log(book_detail)


            let child = document.createElement('div');
            child.classList.add("row");

            let col1 = document.createElement('div');
            col1.classList.add("col-sm-6", "col-md-4", "col-lg-4", "col-xl-4");

            let card = document.createElement('div');
            card.classList.add("card", "h-100");
            card.setAttribute('title', book_detail.name)

            let card_body = document.createElement('div');
            card_body.classList.add("card-body");

            let head = document.createElement('div');
            head.classList.add("card-header");
            head.innerText = book_detail.name;
            card_body.append(head);

            let list = document.createElement('ul');
            list.classList.add("list-group", "list-group-flush");


            let book_name = document.createElement('li');
            book_name.classList.add("list-group-item");
            book_name.innerHTML = `<span> Name: </span>${book_detail.name}`;
            list.append(book_name)
            // console.log(book_detail.name)

            let isbn = document.createElement('li');
            isbn.classList.add("list-group-item");
            isbn.innerHTML = `<span> Isbn: </span> ${book_detail.isbn}`
            list.append(isbn)
            // console.log(book_detail.isbn)

            let pages = document.createElement('li');
            pages.classList.add("list-group-item");
            pages.innerHTML = `<span> No. of Pages: </span> ${book_detail.numberOfPages}`;
            list.append(pages)

            let publisher = document.createElement('li');
            publisher.classList.add("list-group-item");
            publisher.innerHTML = `<span> Publisher: </span> ${book_detail.publisher}`;
            list.append(publisher)

            let release = document.createElement('li');
            release.classList.add("list-group-item");
            release.innerHTML = `<span> Release Date: </span> ${book_detail.released}`;
            list.append(release)

            let character = document.createElement('li');
            character.classList.add("list-group-item", "character");
            character.innerHTML = `<span> Characters:  </span>`;

            let char_list = document.createElement('ul');
            for (let j = 0; j < 5; j++) {
                const randomIndex = Math.floor(Math.random() * book_detail.characters.length)
                char_url = fetch(book_detail.characters[randomIndex]);
                output1 = await char_url;
                char_detail = await output1.json();
                console.log(char_detail.name)
                let characterName = document.createElement('li');
                characterName.innerText = `${char_detail.name}`;
                char_list.appendChild(characterName)
            }
            character.append(char_list);
            list.append(character)

            card_body.append(list)
            card.append(card_body);
            col1.append(card);
            child.append(col1);





            num++

            book_url_2 = fetch(`https://anapioficeandfire.com/api/books/${num}`);
            output_2 = await book_url_2;
            book_detail2 = await output_2.json();

            console.log(book_detail2)


            let col2 = document.createElement('div');
            col2.classList.add("col-sm-6", "col-md-4", "col-lg-4", "col-xl-4");

            let card2 = document.createElement('div');
            card2.classList.add("card", "h-100");
            card2.setAttribute('title', book_detail2.name)

            let card_body2 = document.createElement('div');
            card_body2.classList.add("card-body");

            let head2 = document.createElement('div');
            head2.classList.add("card-header");
            head2.innerText = book_detail2.name;
            card_body2.append(head2);

            let list1 = document.createElement('ul');
            list1.classList.add("list-group", "list-group-flush");


            let book_name1 = document.createElement('li');
            book_name1.classList.add("list-group-item");
            book_name1.innerHTML = `<span> Name: </span> ${book_detail2.name}`;
            list1.append(book_name1)
            // console.log(book_detail.name)

            let isbn2 = document.createElement('li');
            isbn2.classList.add("list-group-item");
            isbn2.innerHTML = `<span> Isbn: </span> ${book_detail2.isbn}`
            list1.append(isbn2)
            // console.log(book_detail.isbn)

            let pages1 = document.createElement('li');
            pages1.classList.add("list-group-item");
            pages1.innerHTML = `<span> No. of Pages: </span> ${book_detail2.numberOfPages}`;
            list1.append(pages1)

            let publisher1 = document.createElement('li');
            publisher1.classList.add("list-group-item");
            publisher1.innerHTML = `<span> Publisher: </span> ${book_detail2.publisher}`;
            list1.append(publisher1)

            let release1 = document.createElement('li');
            release1.classList.add("list-group-item");
            release1.innerHTML = `<span> Release Date: </span> ${book_detail2.released}`;
            list1.append(release1)

            let character2 = document.createElement('li');
            character2.classList.add("list-group-item", "character");
            character2.innerHTML = `<span> Characters:  </span>`;

            let char_list2 = document.createElement('ul');
            for (let j = 0; j < 5; j++) {
                const randomIndex = Math.floor(Math.random() * book_detail2.characters.length)
                char_url = fetch(book_detail2.characters[randomIndex]);
                output1 = await char_url;
                char_detail = await output1.json();
                console.log(char_detail.name)
                let characterName = document.createElement('li');
                characterName.innerText = `${char_detail.name}`;
                char_list2.appendChild(characterName)
            }
            character2.append(char_list2);
            list1.append(character2)

            card_body2.append(list1);
            card2.append(card_body2);
            col2.append(card2);
            child.append(col2);


            num++;


            book_url_3 = fetch(`https://anapioficeandfire.com/api/books/${num}`);
            output_3 = await book_url_3;
            book_detail3 = await output_3.json();

            console.log(book_detail3)


            let col3 = document.createElement('div');
            col3.classList.add("col-sm-6", "col-md-4", "col-lg-4", "col-xl-4");

            let card3 = document.createElement('div');
            card3.classList.add("card", "h-100");
            card3.setAttribute('title', book_detail3.name)

            let card_body3 = document.createElement('div');
            card_body3.classList.add("card-body");

            let head3 = document.createElement('div');
            head3.classList.add("card-header");
            head3.innerText = book_detail3.name;
            card_body3.append(head3);

            let list2 = document.createElement('ul');
            list2.classList.add("list-group", "list-group-flush");


            let book_name2 = document.createElement('li');
            book_name2.classList.add("list-group-item");
            book_name2.innerHTML = `<span> Name: </span> ${book_detail3.name}`;
            list2.append(book_name2)
            // console.log(book_detail.name)

            let isbn3 = document.createElement('li');
            isbn3.classList.add("list-group-item");
            isbn3.innerHTML = `<span> Isbn: </span> ${book_detail3.isbn}`
            list2.append(isbn3)
            // console.log(book_detail.isbn)

            let pages2 = document.createElement('li');
            pages2.classList.add("list-group-item");
            pages2.innerHTML = `<span> No. of Pages: </span> ${book_detail3.numberOfPages}`;
            list2.append(pages2)

            let publisher2 = document.createElement('li');
            publisher2.classList.add("list-group-item");
            publisher2.innerHTML = `<span> Publisher: </span> ${book_detail3.publisher}`;
            list2.append(publisher2)

            let release2 = document.createElement('li');
            release2.classList.add("list-group-item");
            release2.innerHTML = `<span> Release Date: </span> ${book_detail3.released}`;
            list2.append(release2)


            let character3 = document.createElement('li');
            character3.classList.add("list-group-item", "character");
            character3.innerHTML = `<span> Characters:  </span>`;

            let char_list3 = document.createElement('ul');
            for (let j = 0; j < 5; j++) {
                const randomIndex = Math.floor(Math.random() * book_detail3.characters.length)
                char_url = fetch(book_detail3.characters[randomIndex]);
                output1 = await char_url;
                char_detail = await output1.json();
                console.log(char_detail.name)
                let characterName = document.createElement('li');
                characterName.innerText = `${char_detail.name}`;
                char_list3.appendChild(characterName)
            }
            character3.append(char_list3);
            list2.append(character3)

            card_body3.append(list2);
            card3.append(card_body3);
            col3.append(card3);
            child.append(col3);

            num++;

            parent.append(child);
            parent_main.append(parent);

        } catch (err) {
            console.log(err)
        }

    }

    oldText = document.getElementsByTagName("body")[0].innerHTML;
}

api()

function highlight(e) {
    let searchedText = document.getElementById('form1').value.trim();
    let text = oldText;
    let re = new RegExp(searchedText, "g"); // search for all instances
    let newText = text.replace(re, `<mark>${searchedText}</mark>`);
    document.getElementsByTagName("body")[0].innerHTML = newText;
}