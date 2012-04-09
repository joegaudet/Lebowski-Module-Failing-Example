begin
  kind_of? ::Lebowski::Foundation
rescue Exception => e
  require_relative '../../../lib/lebowski/rspec'  
  include Lebowski::Foundation
  include Lebowski::Foundation::Views
end

require 'custom_view'
include ModuleProxyTest::Views

ProxyFactory.proxy SomeViewClass

App = MainApplication.new \
        :app_root_path => "/module_proxy_test#b", 
        :app_name => "ModuleProxyTest",
        :browser => :safari

App.start
App.move_to 1, 1
App.resize_to 1024, 768

App.wait_until(30) do |app|
  App['moduleLoaded']
end

describe "Test" do
    it "Test Module Loading" do
        puts "Some List: #{App['testView'].sc_all_classes}"
    end
end