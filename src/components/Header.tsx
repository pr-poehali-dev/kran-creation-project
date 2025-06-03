import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <div>
              <h1 className="text-2xl font-montserrat font-bold text-secondary">
                Kran-Russland
              </h1>
              <p className="text-sm text-muted-foreground font-opensans">
                Автокраны мирового класса
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="font-opensans font-medium text-secondary hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a
              href="#catalog"
              className="font-opensans font-medium text-secondary hover:text-primary transition-colors"
            >
              Каталог
            </a>
            <a
              href="#about"
              className="font-opensans font-medium text-secondary hover:text-primary transition-colors"
            >
              О компании
            </a>
            <Button className="font-opensans">
              <Icon name="Phone" size={16} />
              Связаться
            </Button>
          </nav>

          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
