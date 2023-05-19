import pandas as pd


df = pd.read_csv('Alterado.csv', encoding='latin')
a = df.dropna()
a.to_csv('Alterado2.csv', index=False)
print(a)
