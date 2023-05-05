import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, Observable, of, Subject } from 'rxjs';
import { Setup } from 'src/app/interfaces/Setup';
import { Trigger } from 'src/app/interfaces/Trigger';

@Injectable({
  providedIn: 'root'
})
export class DiarioTradeService {


  constructor(public httpClient: HttpClient) { }

  ReturnSetups(ativoId: number): Observable<Setup[]> {
    return of([
      {
        "id": 1,
        "nomeSetup": "ABERTURA RANGE NA 9",
        "porcentGain": 0.78,
        "img": "https://example.com/img4.png",
        "ativoId": 1
      },
      {
        "id": 2,
        "nomeSetup": "ABERTURA RANGE NA 20",
        "porcentGain": 0.69,
        "img": "https://example.com/img2.png",
        "ativoId": 1
      },
      {
        "id": 3,
        "nomeSetup": "1º MOVIMENTO CLÁSSICO PERTO",
        "porcentGain": 0.8,
        "img": "https://example.com/img3.png",
        "ativoId": 1
      },
      {
        "id": 4,
        "nomeSetup": "1º MOVIMENTO CLÁSSICO METADE",
        "porcentGain": 0.74,
        "img": "https://example.com/img1.png",
        "ativoId": 1
      },
      {
        "id": 5,
        "nomeSetup": "1º MOVIMENTO CLÁSSICO AFASTADO",
        "porcentGain": 0.72,
        "img": "https://example.com/img5.png",
        "ativoId": 1
      },
      {
        "id": 6,
        "nomeSetup": "RANGE CONFIRMADO",
        "porcentGain": 0.67,
        "img": "https://example.com/img6.png",
        "ativoId": 1
      },
      {
        "id": 7,
        "nomeSetup": "POWER-BREAKOUT NA 9",
        "porcentGain": 0.83,
        "img": "https://example.com/img7.png",
        "ativoId": 1
      },
      {
        "id": 8,
        "nomeSetup": "POWER-BREAKOUT NA 20",
        "porcentGain": 0.64,
        "img": "https://example.com/img8.png",
        "ativoId": 1
      },
      {
        "id": 9,
        "nomeSetup": "BREAKOUT PRÉ",
        "porcentGain": 0.83,
        "img": "https://example.com/img9.png",
        "ativoId": 1
      },
      {
        "id": 10,
        "nomeSetup": "BREAKOUT NO ROMPIMENTO",
        "porcentGain": 0.82,
        "img": "https://example.com/img10.png",
        "ativoId": 1
      },
      {
        "id": 11,
        "nomeSetup": "BREAKOUT PÓS",
        "porcentGain": 0.69,
        "img": "https://example.com/img11.png",
        "ativoId": 1
      },
      {
        "id": 12,
        "nomeSetup": "AFASTAMENTO SUPERIOR",
        "porcentGain": 0.72,
        "img": "https://example.com/img12.png",
        "ativoId": 1
      },
      {
        "id": 1,
        "nomeSetup": "AFASTAMENTO INFERIOR",
        "porcentGain": 0.81,
        "img": "https://example.com/img5.png",
        "ativoId": 1
      },
      {
        "id": 2,
        "nomeSetup": "PIVOT DE PRÉ - MAX OU MIN",
        "porcentGain": 0.78,
        "img": "https://example.com/img6.png",
        "ativoId": 1
      },
      {
        "id": 3,
        "nomeSetup": "PIVOT NO  - MAX OU MIN",
        "porcentGain": 0.76,
        "img": "https://example.com/img7.png",
        "ativoId": 1
      },
      {
        "id": 4,
        "nomeSetup": "VOLTA EM V À FAVOR",
        "porcentGain": 0.55,
        "img": "https://example.com/img8.png",
        "ativoId": 1
      },
      {
        "id": 5,
        "nomeSetup": "VOLTA EM V CONTRA",
        "porcentGain": 0.93,
        "img": "https://example.com/img9.png",
        "ativoId": 1
      },
      {
        "id": 6,
        "nomeSetup": "PIVOT ALINHADO 20 E 200",
        "porcentGain": 0.79,
        "img": "https://example.com/img10.png",
        "ativoId": 1
      },
      {
        "id": 7,
        "nomeSetup": "PÓS 200",
        "porcentGain": 0.56,
        "img": "https://example.com/img11.png",
        "ativoId": 1
      },
      {
        "id": 8,
        "nomeSetup": "NA 200",
        "porcentGain": 0.50,
        "img": "https://example.com/img12.png",
        "ativoId": 1
      },
      {
        "id": 9,
        "nomeSetup": "PRÉ 200",
        "porcentGain": 0.76,
        "img": "https://example.com/img13.png",
        "ativoId": 1
      },
      {
        "id": 10,
        "nomeSetup": "HALT NA MM20 E 9 ALINHAMENTO PERFEITO",
        "porcentGain": 0.82,
        "img": "https://example.com/img14.png",
        "ativoId": 1
      }
    ].filter(setup => setup.ativoId === ativoId))
  }

  ReturnTriggers(): Observable<Trigger[]> {
    return of([
      {
        "id": 1,
        "nome": "PULLBACK DE UMA BARRA COR INVERSA",
        "img": "https://example.com/img1.png",
        "descricao": "Descrição do trigger PULLBACK DE UMA BARRA COR INVERSA"
      },
      {
        "id": 2,
        "nome": "PULLBACK COM DUAS BARRAS",
        "img": "https://example.com/img2.png",
        "descricao": "Descrição do trigger PULLBACK COM DUAS BARRAS"
      },
      {
        "id": 3,
        "nome": "GIFT NA HORA DO ROMPIMENTO",
        "img": "https://example.com/img3.png",
        "descricao": "Descrição do trigger GIFT NA HORA DO ROMPIMENTO"
      },
      {
        "id": 4,
        "nome": "DUPLO GIFT",
        "img": "https://example.com/img4.png",
        "descricao": "Descrição do trigger DUPLO GIFT"
      },
      {
        "id": 5,
        "nome": "PULLBACK DE PRÉ ROMPIMENTO",
        "img": "https://example.com/img5.png",
        "descricao": "Descrição do trigger PULLBACK DE PRÉ ROMPIMENTO"
      },
      {
        "id": 6,
        "nome": "PULLBACK NO ROMPIMENTO",
        "img": "https://example.com/img6.png",
        "descricao": "Descrição do trigger PULLBACK NO ROMPIMENTO"
      },
      {
        "id": 7,
        "nome": "PULLBACK DE PÓS ROMPIMENTO",
        "img": "https://example.com/img7.png",
        "descricao": "Descrição do trigger PULLBACK DE PÓS ROMPIMENTO"
      },
      {
        "id": 8,
        "nome": "CONFIRMAÇÃO COM BARRA FECHADA",
        "img": "https://example.com/img8.png",
        "descricao": "Descrição do trigger CONFIRMAÇÃO COM BARRA FECHADA"
      },
      {
        "id": 9,
        "nome": "PULLBACK DE BREAKOUT",
        "img": "https://example.com/img9.png",
        "descricao": "Descrição do trigger PULLBACK DE BREAKOUT"
      },
      {
        "id": 10,
        "nome": "SEM NECESSIDADE - ENTRADA NO HALT",
        "img": "https://example.com/img10.png",
        "descricao": "Descrição do trigger SEM NECESSIDADE - ENTRADA NO HALT"
      },
      {
        "id": 11,
        "nome": "ABERTURA",
        "img": "https://example.com/img11.png",
        "descricao": "Descrição do trigger ABERTURA"
      },
      {
        "id": 12,
        "nome": "PIVOT ALINHADO COM A MM20",
        "img": "https://example.com/img12.png",
        "descricao": "Descrição do trigger PIVOT ALINHADO COM A MM20"
      },
      {
        "id": 13,
        "nome": "REVERSÃO",
        "img": "https://example.com/img13.png",
        "descricao": "Descrição"
      },
      {
        "id": 14,
        "nome": "PULLBACK COM MAX E MIN MAIOR OU MENOR",
        "img": "https://example.com/img13.png",
        "descricao": "Descrição"
      },
      {
        "id": 15,
        "nome": "TRICK ENTRY",
        "img": "https://example.com/img13.png",
        "descricao": "Descrição"
      }
    ]);
  }
}