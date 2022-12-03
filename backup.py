import datetime as dt
from util import get_data

data = get_data()
data = data.sort_values('id', ascending=False)

date = '_' + dt.datetime.now().strftime('%Y%m%d%H%M')
date = ''
data.drop('svg', axis=1).to_csv('backup/' + 'data' + date + '.csv', index=None)
# data.to_parquet('backup/' + 'data' + date + '.pg')
