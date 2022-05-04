### Requisitos

- [X] Deve ser possível criar uma conta
- [X] Deve ser possível buscar o extrato bancário do cliente
- [] Deve ser possível realizar um depósito
- [] Deve ser possível realizar um saque
- [] Deve ser possível buscar o extrato bancário do cliente por data
- [] Deve ser possível atualizar dados da conta do cliente
- [] Deve ser possível obter dados da conta do cliente
- [] Deve ser possível deletar uma conta
- [] Deve ser possível retornar o balanço

---

### Regras de negócio

- [X] Não deve ser possível cadastrar uma conta com CPF já exístente
- [X] Não deve ser possível buscar extrato em uma conta não exístente
- [] Não deve ser possível fazer depósito em uma conta não exístente
- [] Não deve ser possível fazer saque em uma conta não exístente
- [] Não deve ser possível fazer saque quando o saldo for insuficiente
- [] Não deve ser possível excluir uma conta não exístente