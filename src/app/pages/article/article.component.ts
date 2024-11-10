import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuBarComponent} from '../../components/menu-bar/menu-bar.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-article',
  standalone: true,
    imports: [
        MenuBarComponent,
        FooterComponent
    ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
    post: { title: string, image: string, content: string } = { title: '', image: '', content: '' };

     loremIpsum: string = '\n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin quam vitae urna auctor, ac congue lacus accumsan. Aliquam vehicula vel lacus in egestas. Curabitur id purus tempus dui viverra volutpat eu vitae velit. Fusce ligula est, pellentesque sit amet lacus sit amet, lobortis faucibus justo. Sed elementum neque ligula, vel imperdiet turpis mollis finibus. Sed maximus in tortor vitae tincidunt. Nam at ullamcorper sem, vitae mattis purus. Nam eget risus purus. Phasellus et nulla at mi vehicula bibendum egestas et nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat elit commodo nisi elementum, eget congue nisi gravida. Vestibulum sed sagittis massa, nec finibus ligula. Proin nec ex a quam interdum posuere ac nec lorem. Duis accumsan turpis eget nisi hendrerit, ac finibus neque pellentesque. Nam tincidunt, quam efficitur finibus tincidunt, nisl justo aliquam erat, lacinia finibus tellus nunc id est.\n' +
        '\n' +
        'Curabitur semper libero a justo pharetra sollicitudin. Mauris laoreet nibh tellus, vitae feugiat magna malesuada ut. Phasellus porttitor ligula at fermentum rutrum. Curabitur eu odio tempus, feugiat risus sed, semper ipsum. Nulla finibus augue nibh, et venenatis magna iaculis ac. Nam at orci in magna mattis convallis sed ut metus. Duis rutrum, velit a volutpat luctus, mi ipsum mattis dui, vitae sagittis est nunc eget mi. Sed congue semper massa et semper. Praesent dolor orci, venenatis non est pharetra, convallis dignissim lacus. Phasellus eget pellentesque elit, consectetur sollicitudin magna. Suspendisse sed dui vitae elit ultricies sodales.\n' +
        '\n' +
        'Duis fringilla vel eros ut efficitur. Donec pellentesque odio vel nibh fermentum, auctor cursus nisi porta. Nam faucibus tortor ut risus tincidunt facilisis. Mauris a viverra nisl. Donec faucibus efficitur feugiat. Integer iaculis scelerisque neque, a viverra mauris fringilla a. Ut purus metus, gravida vitae varius et, suscipit id mauris.\n' +
        '\n' +
        'Vestibulum dictum risus vel est feugiat faucibus. Aenean et diam ac tellus gravida sollicitudin in at ante. Praesent enim urna, fermentum ut dapibus a, sagittis porta lorem. Nullam varius ac tellus in fermentum. Sed faucibus velit nec augue porta fringilla. Duis sagittis arcu ac lacus consectetur luctus. Phasellus fringilla sed tortor a hendrerit. Duis pretium dapibus convallis. Maecenas purus quam, porta viverra risus at, sagittis egestas sem. Curabitur consectetur vel arcu sed commodo. Quisque auctor sem nulla, ut scelerisque ante facilisis eu. Praesent neque sapien, pretium non arcu sit amet, tincidunt aliquet sapien. Mauris consequat facilisis lobortis. In hac habitasse platea dictumst.\n' +
        '\n' +
        'Pellentesque hendrerit maximus mi, quis finibus velit convallis quis. Nullam suscipit mi justo, et rhoncus lorem euismod eget. Vivamus orci justo, molestie nec sapien eget, dictum lobortis ipsum. Donec dapibus lacus non arcu interdum bibendum. In porttitor lorem ipsum, ac ullamcorper felis suscipit sit amet. Maecenas diam neque, dignissim in enim non, interdum lobortis diam. Nam vulputate pretium ornare. Nullam volutpat tellus ac hendrerit feugiat. Mauris nibh tortor, imperdiet sit amet ullamcorper ut, rutrum quis nulla. Proin lobortis vehicula dui non vulputate. '

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.loadPost(id);
    }

    loadPost(id: string | null): void {
        const posts = [
            { id: 'article-1', title: 'Novas vagas para o projeto "O Py Tá On"', image: 'images/python.jpg', content: this.loremIpsum },
            { id: 'article-2', title: 'Parceria com a NASA amplia projetos do IMD.', image: 'images/parceria-nasa.jpg', content: this.loremIpsum },
            { id: 'article-3', title: 'Competição de programação do curso de TI acontecerá em dezembro', image: 'images/competicao.jpg', content: this.loremIpsum },
            { id: 'article-4', title: 'Pesquisa investiga hábitos dos alunos do IMD.', image: 'images/hacking.jpg', content: this.loremIpsum}
        ];

        const post = posts.find(p => p.id === id);
        if (post) {
            this.post = post;
        }
    }
}
