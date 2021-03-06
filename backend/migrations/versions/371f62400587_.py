"""empty message

Revision ID: 371f62400587
Revises: 8f455405a800
Create Date: 2020-02-23 04:06:39.612355

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '371f62400587'
down_revision = '8f455405a800'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('societyadmin',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('firstname', sa.String(length=64), nullable=True),
    sa.Column('lastname', sa.String(length=64), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('password', sa.String(length=128), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.drop_table('user')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=True),
    sa.Column('firstname', sa.VARCHAR(length=64), autoincrement=False, nullable=True),
    sa.Column('lastname', sa.VARCHAR(length=64), autoincrement=False, nullable=True),
    sa.Column('password', sa.VARCHAR(length=128), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='user_pkey'),
    sa.UniqueConstraint('email', name='user_email_key')
    )
    op.drop_table('societyadmin')
    # ### end Alembic commands ###
