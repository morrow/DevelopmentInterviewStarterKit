require 'rails_helper'

RSpec.describe Person, type: :model do

  subject { described_class.new(name: 'Test Name', email: 'test@salesloft.com',title: 'Test Title') }

  it 'is valid with required attributes' do
    expect(subject).to be_valid
  end

  it 'requires a name attribute' do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it 'requires an email attribute' do
    subject.email = nil
    expect(subject).to_not be_valid
  end

  it 'requires unique email attribute' do
    subject.save!
    p = Person.create(name: 'Other Name', email:'test@salesloft.com', title: 'Other Title')
    expect{ p.save! }.to raise_error(ActiveRecord::RecordInvalid,'Validation failed: Email has already been taken')
  end

  it 'requires a job title attribute' do
    subject.title = nil
    expect(subject).to_not be_valid
  end

end
